import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <>

    <div className="container-fluid bg-secondary mb-5 py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
        </div>
    </div>


      {cart.map((item) => {
        return (
          <div key={item.id}>
          <div className="container-fluid pt-5">
          <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
          <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Remover</th>
          </tr>
          </thead>
          <tbody className="align-middle">
          <tr>
          <td className="align-middle"><img src={item.url} alt="" style="width: 50px;" /> {item.title}</td>
          <td className="align-middle">{item.price}</td>
          <td className="align-middle">
          <div className="input-group quantity mx-auto" style="width: 100px;">
         <span>{item.cant}</span>
         </div>
         </td>
         <td className="align-middle">$150</td>
         <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
         </tr>
         </tbody>
         </table>
         </div>
         <div className="col-lg-4">
         <div className="card border-secondary mb-5">
         <div className="card-header bg-secondary border-0">
         <h4 className="font-weight-semi-bold m-0">Resumen</h4>
         </div>
         <div className="card-body">
         <div className="d-flex justify-content-between mb-3 pt-1">
         <h6 className="font-weight-medium">Subtotal</h6>
         <h6 className="font-weight-medium">$150</h6>
         </div>
         </div>
         <div className="card-footer border-secondary bg-transparent">
         <div className="d-flex justify-content-between mt-2">
         <h5 className="font-weight-bold">Total</h5>
         <h5 className="font-weight-bold">$160</h5>
         </div>
         <button className="btn btn-block btn-primary my-3 py-3">Comprar</button>
         </div>
         </div>
         </div>
         </div>
         </div>
         </div>
        );
      })}
   
    </>
  );
};

export default Cart;