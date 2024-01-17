

import {Modal, Image} from 'react-bootstrap'
import { useBebidasGlobalState } from '../context/BebidasProvider'

export const ModalBebida = () => {

  const { modal, handleModalClick} = useBebidasGlobalState();

    

  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            Cuerpo del Modal
        </Modal.Body>
    </Modal>
  )
}
