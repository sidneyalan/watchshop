import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ relog, stock }) => {
      return (
  
           
            <div className="container py-5">
            <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner border">
            <div className="carousel-item active">
            <img className="w-100 h-100" src={"../"+relog.url} alt={relog.title} />
            </div>
            </div>
            </div>
            </div>
  
            <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{relog.title}</h3>
            <h3 className="font-weight-semi-bold mb-4">{relog.price}</h3>
            <p className="mb-4">{relog.description}</p>
            <p className="mb-4">Stock: {relog.stock}</p>
            <ItemCount stock = {relog.stock} />
            
         
          </div>
          </div>
          </div>
          
       
  );

  };
    
  export default ItemDetail;