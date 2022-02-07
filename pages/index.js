import { useState } from 'react';

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
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1 );
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adionar</button>
        </div>
    )    
}

export default Home;