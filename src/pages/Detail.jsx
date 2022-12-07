import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const Detail = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  const getMealDetail = async () => {
    const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    console.log(data.meals[0]);
    setMeal(data?.meals[0]);
    setLoading(false);
  }

  useEffect(() => {
    getMealDetail();
  }, [])

  return (
    <>
      {loading ? <Loading/> : (
      <div className='flex my-7 gap-7 flex-wrap'>
        <img src={meal.strMealThumb} className='rounded-xl shadow-lg w-[400px]' alt="" />
        <div>
          <small className="bg-violet-300 px-3 py-1 rounded-lg">{meal.strArea}</small>
          <h1 className="font-bold text-2xl mr-40">{meal.strMeal}</h1>
          <div className="my-2">
            <h4 className='font-semibold text-xl mb-1'>Instructions</h4>
            <p className="text-gray-600">{meal.strInstructions}</p>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Detail
