import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Cadeira from './Cadeira'
import './Mesa.css';


function App(){
    return (
    
    <div className='mesa'>
        <Cadeira vazia = {true} />
        <Cadeira vazia = {true} />
        <Cadeira vazia = {true} />
        <Cadeira vazia = {true} />
    </div>
    
    )

    

    
}



export default App
