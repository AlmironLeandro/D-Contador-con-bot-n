import CartWidget from "./CartWidget";
import React, {Fragment} from "react";
// import React,{Component} from "react";

//Tengo que llamar al componente cartwidget y ubicarlo aqui dentro
const NavBar = () =>
(
<div className="navbar-backgroud">
        <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                    <a class="nav-link" href="#">Registrar tu negocio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ayuda en linea</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Registrate</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Ingresar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Compras<CartWidget></CartWidget></a>
                </li>
        </ul>
    </div>
)


  export default NavBar;