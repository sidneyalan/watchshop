/*import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ relog, stock }) => {*/

import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ relojes }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const relojRef = doc(db, "reloj", `${id}`);

    getDoc(relojRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No existe el documento!");
      }
    });
  }, []);
//DETALLE DEL PRODUCTO
  const relojFilter = relojes.filter((reloj) => reloj.id == id);
      return (
  <>

     {relojFilter.map((reloj) => (
        <div key={reloj.id}>
            <div className="container py-5">
            <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
            <div id="product-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner border">
            <div className="carousel-item active">
            <img className="w-100 h-100" src={reloj.url} alt={reloj.title} />
            </div>
            </div>
            </div>
            </div>
  
            <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{reloj.title}</h3>
            <h3 className="font-weight-semi-bold mb-4">{reloj.price}</h3>
            <p className="mb-4">{reloj.description}</p>
            <p className="mb-4">Stock: {reloj.stock}</p>
            <ItemCount  stock={reloj.stock}
                  id={reloj.id}
                  price={reloj.price}
                  name={reloj.name}
            />
          </div>
          </div>
          </div>
          </div>
    ))}
</>  
       
  );

  };
    
  export default ItemDetail;