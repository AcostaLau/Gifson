import React from 'react';
import { Button, Modal } from 'react-bootstrap'
export const Cartel = ({show, handleClose, mostrar, cantItem}) => {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title></Modal.Title>
            </Modal.Header>
                
            <Modal.Body>{mostrar ?<p className='text-center'>se han agregado {cantItem} productos al carrito</p>  :<p></p>}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
        </Modal>
    </>
  );
}

