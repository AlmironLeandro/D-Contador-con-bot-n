
import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import {useState, useEffect} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>
{
  //ESTA FUNCION ESTA MAL DEFINIDA YA QUE CADA COMPONENTE TIENE QUE TENER SUS PROPIAS VARIABLES Y FUNCIONES
  //DE ESTA FORMA SE ESTA COMPARTIENDO Y CAMBIAN TODOS LOS COMPONENTE(VARIABLES) Y SE VUELVEN DEPENDIENTES.
  const [stockActual, setStockActual] =useState(5);

  const restarStock = (e, nuevoStock) => 
  {
    e.preventDefault();
    if(stockActual>=nuevoStock){setStockActual((stockActual) => stockActual - nuevoStock);} 
  }
return <div>
    <NavBar></NavBar>
    <ItemListContainer greeting="Saludos chicos de coderhouse"></ItemListContainer>
    <div class="container">
      <div class="row">
        <div class="col">
          <ItemCount stock={stockActual} initial={1} onAdd={restarStock}></ItemCount>
        </div>
        <div class="col">
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock}></ItemCount>
        </div>
        <div class="col">
        <ItemCount stock={stockActual} initial={1} onAdd={restarStock}></ItemCount>
        </div>
    </div>
  </div>
</div>
}


export default App;
