import { useState } from "react";
import { useGlobalState } from "../context/GlobalProvider";
import {  useBebidasGlobalState } from "../context/BebidasProvider";

export const Form = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  });

  const {consultarBebida} = useBebidasGlobalState();
  const {categorias} = useGlobalState();  


  const handleSubmit = (e) => {
    e.preventDefault();

    if(Object.values(busqueda).some(value => value === undefined || value === '')){
      alert('All fields are required');
      return;
    }

    consultarBebida(busqueda);
  }


  return (
    <div className="flex items-center justify-center h-full">
      <form 
        className="lg:flex"
        onSubmit={handleSubmit}
      >
        
        <div className="m-5">
          <label 
            htmlFor="name"
            className="text-md font-semibold"
          >Name of the drink</label>
          <input
            type="text"
            className="mt-3 block bg-white py-4 px-7 border border-gray-500 rounded-md"
            placeholder="Tequila, Vodka, etc"
            id="name"
            name="nombre" //IMPORTANT
            value={busqueda.nombre}
            onChange={(e) => setBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
            })}
          />
        </div>

        <div className="m-5">
          <label 
            htmlFor="drinkType"
            className="text-md font-semibold"
          >Category of the drink</label>
          <select
            id="drinkType"
            className="mt-3 block bg-white py-4 px-7 border border-gray-500 rounded-md"
            value={busqueda.categoria}
            name="categoria" //IMPORTANT
            onChange={(e) => setBusqueda({
              ...busqueda,
              [e.target.name] : e.target.value
            })}
          >
            <option value="" disabled> --- Select a Category --- </option>
            {
              categorias.map((categoria,index) => 
                  <option key={index} value={categoria.strCategory}>{categoria.strCategory}</option>
                )
            }
            

          </select>
        </div>
        <div className="m-5">
          <button
            className="bg-red-400 md:mt-9  p-3 rounded-md text-white font-bold hover:bg-red-500 transition-all"
          >
            Find Drink
          </button>
        </div>
        
      </form>
    </div>
  );
};
