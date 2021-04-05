import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./components/NavBar";
// import ItemListContainer from "./components/ItemListContainer"

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      contador:0,
      nombre:["leandro","Lautaro","Leonardo"],
      numeroNombre: 0
    };
  }

aumentarContador(e){
  e.preventDefault(e);
  this.setState({contador:this.state.contador+1});
  if(this.state.numeroNombre===2){
    this.setState({numeroNombre:0})
  }
  else{
    this.setState({numeroNombre: this.state.numeroNombre +1})
  }
  
}
 
 render(){
   return(
     <div>
       <button onClick={(e) => (this.aumentarContador(e))} type="button" className="btn btn-dark">Cambiar</button>
       <hr/>
       <p>Contador:{this.state.contador}</p>
       <p>Nombre: {this.state.nombre[this.state.numeroNombre]}</p>
       <p>Nombre totales: </p>
       {this.state.nombre.map((n,i)=>(<p key={i}><hr/>{n}</p>))}
     </div>
   )
 }





}
 









export default App;




//<------------USO DE LIBRERIA MATERIAL UI------------>
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
//import Breadcrumbs from '@material-ui/core/Breadcrumbs';
//import React, { Fragment } from "react";


// function handleClick(event) {
//     event.preventDefault();
//     console.info('You clicked a breadcrumb.');
//   }
  
  
// const App =() => (
//     <div>
//         <Fragment>
//         <Breadcrumbs aria-label="breadcrumb">
//         <Link color="inherit" href="/" onClick={handleClick}>
//         Material-UI
//         </Link>
//         <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
//             Core
//          </Link>
//     <Link
//     color="textPrimary"
//     href="/components/breadcrumbs/"
//     onClick={handleClick}
//     aria-current="page"
//   >
//     Breadcrumb
//     </Link>
//     </Breadcrumbs>
//     </Fragment>
    
//     </div>
//     );




