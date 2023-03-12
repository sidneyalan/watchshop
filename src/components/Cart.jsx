import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Context";


const Cart = () => {
  const {cart, setCart, removeItem} = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setTotalPrice(
        cart
          .map((product) => product.price * product.quantity)
          .reduce((total, valor) => total + valor)
      );
    }
  }, [cart]);

  return (
    <>

    <div className="container-fluid bg-secondary mb-5 py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
        </div>
    </div>
          <div className="container-fluid pt-5">
          <div className="row px-xl-5">
          <div className="col-lg-12 table-responsive mb-5">
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
          {cart.map((item) => {
        return (
          <tr key={item.id}>
          <td className="align-middle"><img src={item.url} width={60} alt={item.title} /></td>
          <td className="align-middle">{item.price}</td>
          <td className="align-middle">{item.quantity}</td>
          <td className="align-middle">{item.quantity * item.price}</td>
          <td className="align-middle">
          <button className="btn btn-sm btn-primary" onClick={() => removeItem(item.id)}><i className="fa fa-times"></i></button></td>
         </tr>
                );
          })}
         </tbody>
         </table>
         <div className="card-header bg-secondary border-0 right py-3">
        <h4 className="font-weight-semi-bold m-0 ">Total: ${totalPrice}</h4>
          <Link to="/order" className="btn btn-primary">
            Realizar compra
          </Link>
        </div>
         </div>
         </div>
         </div>


    </>
  );
};

export default Cart;