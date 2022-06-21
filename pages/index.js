import { useState } from 'react';
import  { analista } from './api/analista'

function Home(){
    return (
        <div>
            <h1>HOME</h1>
            <Contador />
            <div>teste</div>
        </div>
    )
}

function Contador(){
    let listaAnalista = analista
    return (
        <div>
            <div>{listaAnalista}</div>
            
        </div>
    )    
}

export default Home;