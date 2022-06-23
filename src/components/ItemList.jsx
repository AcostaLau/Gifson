import React, {useState, useEffect}  from 'react'
import getGifs from '../API/getGifs'
import { Item } from './Item'
import '../style.css'
import styled from 'styled-components'
import { Spiner } from './Spiner'

export const ItemList = ({buscarGif}) => {
    const [gifs, setGifs] = useState([])
    

    //busco en la api 
    useEffect(() => {
        getGifs({buscarApi : buscarGif}).then(gifs => setGifs(gifs))
    }, [buscarGif])
    return (
    <DivItemContainer>
        {gifs.length ? <Item className='item' gifs = {gifs}/> : `Ingrese el nombre del gif que desea buscar`}
        
    </DivItemContainer>
  )
}


const DivItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`