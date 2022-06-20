import React, {useState, useEffect}  from 'react'
import getGifs from '../API/getGifs'
import { Item } from './Item'
import '../style.css'
import styled from 'styled-components'

export const ItemList = ({buscarGif}) => {
    const [gifs, setGifs] = useState([])
    

    //busco en la api 
    useEffect(() => {
        getGifs({buscarApi : buscarGif}).then(gifs => setGifs(gifs))
    }, [buscarGif])
    return (
    <DivItemContainer>
        <Item className='item' gifs = {gifs}/>
    </DivItemContainer>
  )
}


const DivItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`