import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';

export const BebidasContext = createContext();

export const useBebidasGlobalState = () => {
  const data = useContext(BebidasContext);
  return data;
}

const BebidasProvider = ({children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);

  const consultarBebida = async(datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
      const { data} =  await axios(url);
      setBebidas(data.drinks);
      
    } catch (error) { 
      console.log(error);
    }
  }

  const handleModalClick = () => {
    setModal(!modal);
  }
  
  return (
    <BebidasContext.Provider value={{
        consultarBebida,
        setBebidas,
        bebidas,
        handleModalClick,
        modal
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export default BebidasProvider;
