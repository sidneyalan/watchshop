import React from "react";
import { Link } from "react-router-dom";


const Item = ({ id, url, title, stock, category,  price }) => {
  return (
    <div key={id}>

    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          <img className="img-fluid w-100" src={"../"+url} alt={title} />
          </div>
            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6>{title}</h6>
            <div className="justify-content-center">
            <h6>Stock: {stock} | Precio: {price}</h6>
            <h6>Categoria: {category}</h6>
            </div>
            </div>
            <div className="card-footer d-flex justify-content-between bg-light border">
            <Link to={`/item/${id}`}><button className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>Ver</button></Link>
            <a href="" className="btn btn-sm text-dark p-0">
            <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    </div>

    </div>

  );
};

export default Item;