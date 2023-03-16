import React from "react";
import { Link } from "react-router-dom";


//COMPONENTE QUE MUESTRA TODOS LOS PRODUCTOS DE LA TIENDA
const Item = ({ id, url, title, stock, category,  price }) => {
  
  ///////////////   LISTADO DE PRODUCTOS ////////////////////////////
  return (
    <>
                <div className="card">
                    <img src={url} className="card-img-top"></img>
                    <div className="card-body">
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6><span className="line-clamp">{title}</span></h6>
                    <div className="d-flex justify-content-center">
                    <h6>Stock: {stock}</h6>
                    <h6>Categoria: {category}</h6>
                    <h6>Precio: ${price}</h6>
                    </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/item/${id}`}>
                    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver Detalle</button></Link>
                    </div>
                    </div>
                </div>

</>

  );
};

export default Item;