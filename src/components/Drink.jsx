

import React from 'react'
import { useBebidasGlobalState } from '../context/BebidasProvider'

export const Drink = ({bebida}) => {

  const {handleModalClick, handleBebidaIdClick} = useBebidasGlobalState();

  return (
    <div className='m-3  border border-gray-400 rounded-md'>
      <img src={bebida.strDrinkThumb} alt="" />
      <h1 className='text-xl p-5 font-bold'>{bebida.strDrink}</h1>
      <button
        className='bg-red-500 text-white font-bold p-3 rounded-md hover:bg-red-600 transition-all mb-3'
        onClick={() => {
          handleModalClick() 
          handleBebidaIdClick(bebida.idDrink)
        }}
      >Read More</button>
    </div>
  )
}
