
import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>
(
  <div>
  <NavBar></NavBar>
  <ItemListContainer greeting="Saludos chicos de coderhouse"></ItemListContainer>

  <div class="container">
    <div class="row">
      <div class="col">
        <ItemCount></ItemCount>
      </div>
      <div class="col">
      <ItemCount></ItemCount>
      </div>
      <div class="col">
      <ItemCount></ItemCount>
      </div>

  </div>

</div>


</div>
);

export default App;
