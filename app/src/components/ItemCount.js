import {useState} from "react";
const ItemCount = () => 
{
    const [counter, setCounter] = useState(0);

    const controlNegative = ()=>{
        if(counter!==0){setCounter((counter) => counter = counter - 1)}
    }
    
   return <div className="card" style={{width: '18rem'}}>
        <img src="https://http2.mlstatic.com/D_NQ_NP_718161-MLA45132029088_032021-O.jpg" className="card-img-top" alt="..."></img>
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
        <div class="container">
            <div class="row">
                <div class="col">
                    <button onClick={()=> controlNegative()} type="button" class="btn btn-light">-</button>
                </div>
                <div class="col">
                {counter}
                    </div>
                <div class="col">
                    <button onClick={()=> setCounter((counter)=> counter + 1)}  type="button" class="btn btn-light">+</button>
            </div>
        </div>
</div>
    
   
    
  </div>
</div>


}

export default ItemCount;