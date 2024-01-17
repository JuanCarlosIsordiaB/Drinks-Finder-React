

import {Modal, Image} from 'react-bootstrap'
import { useBebidasGlobalState } from '../context/BebidasProvider'

export const ModalBebida = () => {

  const { modal, handleModalClick ,receta} = useBebidasGlobalState();
   console.log(receta);
    

  return (
    <Modal show={modal} onHide={handleModalClick}>
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
             <h2>Ingredients and quantities</h2>
          </div>
        </Modal.Body>
      
    </Modal>
  )
}
