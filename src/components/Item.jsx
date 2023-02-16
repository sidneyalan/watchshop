import React from "react";
import { Link } from "react-router-dom";


const Item = ({ id, url, title, stock, category,  price }) => {
  return (
    <div className="container bg-danger">
    <div key={id} className="row box"> 
     <div className="col-md-3 box-item">
     <div className="card d-flex">
    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
    <img className="img-fluid w-100" src={url} alt="" />
    </div>
    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
    <h6>{title}</h6>
    <div className="d-flex justify-content-center">
    <h6>Stock: {stock}</h6>
    <h6>Categoria: {category}</h6>
    <h6>Precio: ${price}</h6>
    </div>
    </div>
    <div className="card-footer d-flex justify-content-between bg-light border">
    <button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</button>
    <button className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
    </div>
    </div>
    </div>
    </div>
</div>
  );
};

export default Item;