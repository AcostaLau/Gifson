import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import '../style.css'
import { Cartel } from './Cartel'



export const ItemContador = ({stock, initial, titulo}) => {
    const [cantItem, setCantItem] = useState(initial)
    const [mostrar, setMostrar] = useState(false)

    //Modal state
    const [show, setShow] = useState(false);

    const sumador = () => {
        if(cantItem >= stock){
            setCantItem(cantItem)
          
        }else{
            setCantItem(cantItem+1)
          
        }
    }
    
    const resta = () => {
        if(cantItem <= 1){
            setCantItem(cantItem)
           
          
        }else{
            setCantItem(cantItem-1)
            
          
        }
    }

    const addToCart = () => {
        setMostrar(true)
        handleShow()
    }

    
    //Funciones modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <DivContainerContador>
                <Button onClick={resta}>-</Button>
                <p>Cantidad: {cantItem}</p>
                <Button onClick={sumador}>+</Button>
            </DivContainerContador>
           

            <DivContainerAddToCart>
                <Button className='text-center' variant="primary" onClick={addToCart}>Add to cart</Button>
            </DivContainerAddToCart>

            <Cartel show={show} handleClose={handleClose} cantItem = {cantItem} mostrar = {mostrar} titulo={titulo}/>
        </div>
  )
}


const DivContainerContador = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;

`
const DivContainerAddToCart = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`