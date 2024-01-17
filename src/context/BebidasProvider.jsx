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
  const [bebidaId, setBebidaId] = useState('');
  const [receta, setReceta] = useState('')


  const obtenerReceta = async() => {
    if (!bebidaId) return;

    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
      const {data} = await axios(url);
      setReceta(data.drinks[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    obtenerReceta();
  }, [bebidaId])
  

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

  const handleBebidaIdClick = (id) => {
    setBebidaId(id);
  }
  
  return (
    <BebidasContext.Provider value={{
        consultarBebida,
        setBebidas,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdClick,
        receta,
        setReceta
      }}
    >
      {children}
    </BebidasContext.Provider>
  )
}

export default BebidasProvider;
