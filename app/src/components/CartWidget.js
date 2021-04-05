import { Component } from 'react';
import imagenCarrito from '../Asset/cartwidget.png'
// import {ShoppingCartIcon} from "../../node_modules/@material-ui/icons/ShoppingCart";

//ASPECTOS A INCLUIR EN EL ENTREGABLE ---> rendering. Con una arrow function ya hace rendering.

class CartWidget extends Component
{
    render()
    {
        return(
        <div className="divCarro">
         <img className="imagenCarro" src={imagenCarrito}/>
        </div>
         ) 
    }

}


    
        
    

        

export default CartWidget;









// const CartWidget = () => 
// (
//     <div className="divCarro">
//         <img className="imagenCarro" src={imagenCarrito}/>
//     </div>
        
    
// )

// export default CartWidget;