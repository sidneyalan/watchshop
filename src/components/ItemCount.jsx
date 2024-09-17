import React from 'react'
import { useState, useContext } from 'react';
import ItemDetail from './ItemDetail';
import Swal from "sweetalert2";
import { CartContext } from "../context/Context";


  const ItemCount = ({ stock, id, price, title, url }) => {
    const { cart, setCart } = useContext(CartContext);
    const [ count, setItems ] = useState(1);
    
    const masStock = () =>{
      if(count < stock){
        setItems(count + 1);
      }
    }
  
    const menosStock = () =>{
      if(count > 1)
      setItems(count - 1);
    }
 const addToCart = () => {
  setCart((currItems) => {
    const isItemFound = currItems.find((item) => item.id === id);
    if (isItemFound) {
      return currItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + count };
        } else {
          return item;
        }
      });
    } else {
      const newItem = { id, quantity: count, price, title, url};
      Swal.fire({
        title: 'Producto agregado al carrito',
        text: 'El producto ha sido agregado correctamente al carrito.',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
      });
      return [...currItems, newItem];
    }
  });
};




    return (
      <>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" className="btn btn-primary" onClick={menosStock}>-</button>
      <button type="button" className="btn btn-warning">{count}</button>
      <button type="button" className="btn btn-primary" onClick={masStock}>+</button>
      </div>
      <button type="button" className="btn btn-success" onClick={() => addToCart()}>Agregar al Carrito</button>
      </>
    )
}

export default ItemCount