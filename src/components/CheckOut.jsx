import {  useContext, useState } from "react";
import { CartContext } from "../context/Context";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const CheckOut = () => {
  const {cart, setCart, removeItem, clear, total} = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setConfirm] = useState("");


  const generarOrden = () =>{
    const buyer = {name:nombre, email:email, emailConfirm:emailConfirm};
    const fecha = new Date();
    const date = `${fecha.getFullYear()} - ${fecha.getMonth() + 1} - ${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds}`;
    const order = {buyer:buyer, items:{cart}, date:{date}, total:total()};
    
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(data=>{
    setOrderId(data.id);
    clear();
    
    });
    
    }

  return (
    <>

    <div className="container-fluid bg-secondary mb-5 py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
        </div>
    </div>
          <div className="container-fluid pt-5">
          <div className="row px-xl-5">
          <div className="col-lg-6 table-responsive mb-5">
          <table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
          <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>

          </tr>
          </thead>
          <tbody className="align-middle">
          {cart.map((item) => {
        return (
          <tr key={item.id}>
          <td className="align-middle"><img src={item.url} width={60} alt={item.title} /></td>
          <td className="align-middle">{item.price}</td>
          <td className="align-middle">{item.quantity}</td>
          <td className="align-middle">{item.quantity * item.price}</td>
         </tr>
                );
          })}
         </tbody>
         </table>
         <div className="card-header bg-secondary border-0 right py-3">
        <h4 className="font-weight-semi-bold m-0 ">Total: ${total()}</h4>
        </div>
         </div>
         <div className="container-form">
        <div className="container">

        <div className="row g-3">
        <div className="col-lg-6">
        <label className="form-label"><strong>Apellido y Nombre</strong></label>
        <input type="text" className="form-control" name="nombre" onChange={(e) => setNombre(e.target.value)}  required />
        <div className="invalid-feedback">Escriba su apellido</div>
        </div>
        <div className="col-sm-12">
        <label className="form-label"><strong>Email</strong></label>
        <input type="email" className="form-control"  name="email" onChange={(e) => setEmail(e.target.value)}   required />
        <div className="invalid-feedback">Escriba su nombre.</div>
        </div>
        <div className="col-sm-12">
        <label className="form-label"><strong>Confirm su Email</strong></label>
        <input type="email" className="form-control"  name="emailConfirm" onChange={(e) => setConfirm(e.target.value)}   required />
        <div className="invalid-feedback">Escriba su nombre.</div>
        </div>
        </div>
        <button className="btn btn-primary" type="submit" onClick={generarOrden}>COMPRAR AHORA</button>
        </div>
        </div>
        </div>
        {orderId ? <Navigate to={"/tankyou/" + orderId} /> : ""}
        </div>
    </>
  );
};

export default CheckOut;