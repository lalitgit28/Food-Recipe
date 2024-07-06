import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Mealinfo() {
    const { mealid } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
                const jsonData = await response.json();
                console.log(jsonData.meals[0]);
                setInfo(jsonData.meals[0]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (mealid !== '') {
            getInfo();
        }
    }, [mealid]);

    return (
        <div>
            {!info ? "Data Not Found" :
                <div className='mealInfo'>
                    <img src={info.strMealThumb} alt={info.strMeal} />
                    <div>
                        <h1>Recipe Details</h1>
                        <button>{info.strMeal}</button>
                        <h3>Instructions</h3>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            }
        </div>
    );
}
