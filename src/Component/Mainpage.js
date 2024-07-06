import React, { useState } from 'react';
import Mealcards from './Mealcards';

export default function Mainpage() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const[msg , setMsg] = useState("")

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const myFun = async () => {
    if(search ==""){
        setMsg("Please Enter Something")
    }else {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await response.json();
        setData(jsonData.meals);
        setMsg("")
    }
    // try {
    
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    
  }

  return (
    <>
    <h1 className='tags'> FOOD RECIPE APP</h1>
    <div className='container'>
      <div className='searchBar'>
        <input type='text' placeholder='Enter Dish' onChange={handleInput} />
        <button onClick={myFun}>Search</button>
      </div>
      <h4 className='tags'>{msg}</h4>
      <div>
        <Mealcards detail={data} />
      </div>
    </div>
    </>
  );
}
