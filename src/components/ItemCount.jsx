import React from 'react'
import { useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemCount = (stock) => {

    const [items, setItems] = useState(1);
    const masStock = () =>{
      if(items < stock){
        setItems(items + 1);
      }
    }
  
    const menosStock = () =>{
      if(items > stock)
      setItems(items - 1);
    }
  
    const onAdd =()=>{
      console.log("Agregaste: "+ items + " productos al carrito");
    }

    return (
      <>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" className="btn btn-primary" onClick={menosStock}>-</button>
      <button type="button" className="btn btn-warning">{items}</button>
      <button type="button" className="btn btn-primary" onClick={masStock}>+</button>
      </div>
      <button type="button" className="btn btn-success" onClick={onAdd}>Agregar al Carrito</button>
      </>
    )
}

export default ItemCount