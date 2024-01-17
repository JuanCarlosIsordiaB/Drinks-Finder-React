

import {Modal, Image} from 'react-bootstrap'
import { useBebidasGlobalState } from '../context/BebidasProvider'

export const ModalBebida = () => {

  const { modal, handleModalClick ,receta, setReceta} = useBebidasGlobalState();
   
  const mostrarIngredientes = () => {
    let ingredientes = [];

    for(let i=1; i<16;i++){
      if( receta[`strIngredient${i}`]){
        ingredientes.push(
          <li>{receta[`strIngredient${i}`]}{receta[`strMeasure${i}`]}</li>
        )
      }
    }
    return ingredientes
  }
    

  return (
    <Modal show={modal} onHide={() => {
      handleModalClick()
      setReceta({})
    }}>
      <Image 
        src={receta.strDrinkThumb}
        alt={` Imagen Receta ${receta.strDrink}`}
      
      />
        <Modal.Header>
          <Modal.Title>{receta.strDrink}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3'>
             <h2>Instructions:</h2>
             {
              receta.strInstructions
             }
             <h2>Ingredients and quantities</h2>
             {
              mostrarIngredientes()
             }
          </div>
        </Modal.Body>
      
    </Modal>
  )
}
