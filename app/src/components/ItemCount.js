import {useState, useEffect} from "react";

const ItemCount = ({stock,initial,onAdd}) => 
{
    const [counter, setCounter] = useState(initial);

    const controlNegative = ()=>{
        if(counter!=1){setCounter((counter) => counter = counter - 1)}
    }
    
   return <div className="card" style={{width: '18rem'}}>
        <img src="https://http2.mlstatic.com/D_NQ_NP_718161-MLA45132029088_032021-O.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
        <p className="card-text">
            <li>Boost Clock / Velocidad de memorai</li>
            <li>1860 MHz / 8 Gbps</li>
            <li>6GB GDDR5</li>
            <li>DisplayPort x 3 / HDMI x 1</li>
        </p>
    
        <div className="container">
            <div className="row">
                <div className="col">
                <button onClick={()=> setCounter((counter)=> counter + 1)}  type="button" className="btn btn-light" id="buttonP">+</button>
                </div>
                <div className="col">
               <p>{counter}</p> 
               <p>S:{stock}</p>
                    </div>
                <div className="col">      
                    <button onClick={()=> controlNegative()} type="button" className="btn btn-light" id="buttonN">-</button>
            </div>
        </div>
        <button type="button" onClick={(e)=> onAdd(e,counter)} className="btn btn-outline-secondary" >Agregar al carrito</button>
</div>
    
   
    
  </div>
</div>


}

export default ItemCount;