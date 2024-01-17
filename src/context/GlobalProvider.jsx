import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';

export const Context = createContext();

//Hook
export const useGlobalState = () => {
  const data = useContext(Context);
  return data;
}

const GlobalProvider = ({children }) => {
  const [categorias, setCategorias] = useState([]);

  const obtenerCategorias = async() => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const {data} = await axios(url);
      setCategorias(data.drinks);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    obtenerCategorias();
  }, [])
  

  return (
    <Context.Provider value={{
        categorias
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default GlobalProvider;
