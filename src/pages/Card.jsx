import React from 'react'
import {Link} from 'react-router-dom';

const Card = ({meal}) => {
  return (
    <div className='border p-5 w-64 flex justify-center items-center flex-col rounded-xl h-[350px] shadow-lg transition duration-200 hover:scale-105 cursor-pointer'>
      <img src={meal.strMealThumb} width='230px' alt="" className="rounded-lg" />
      <p className='text-center my-3 fw-semibold'>{meal.strMeal}</p>
      <Link to={`/detail/${meal.idMeal}`} className='bg-violet-500 px-7 py-2 text-white rounded-xl '>See more</Link>
    </div>
  )
}

export default Card
