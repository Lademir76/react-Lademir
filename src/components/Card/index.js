import { useState } from 'react';
import Button from '../Button';

const Card = () => {

    const [valor, setValor] = useState(0)

     function Adicionar (){
      setValor(valor + 1)
    }
     function Remover (){
        setValor(valor - 1)
    }
    return(
        <div class="card">
           <div class="card-header">
            Meu primeiro Card
            </div>
        <div class="card-body">
            <Button
            type="button"
            className="btn btn-success"
              onClick={Adicionar}   
             >
             Adicionar
             </Button>    
            <button 
                type="button" 
                className="btn btn-danger"
                onClick={Remover}
            >
             Remover  
            </button>
             
               <p>{valor}</p>
           </div>
        </div>
    )
}

export default Card;