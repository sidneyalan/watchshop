import React from 'react'

import ItemList from "../components/ItemList";
import Products from "../products.json";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
  const { category } = useParams();

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0) {
        reject(new Error("No hay Productos"));
      }
      setTimeout(() => {
        resolve(Products);
      }, 2000);
    });
  };

  async function fetchingProducts() {
    try {
      const datosFetched = await getProducts();
    } catch (err) {
      console.log(err);
    }
  }

  fetchingProducts()

  const catFilter = Products.filter((reloj) => reloj.category === category);
  return (
    <div className='container text-center'>

      <h3>Relog por categoria</h3>

      {category ? <ItemList reloj={catFilter} /> : <ItemList reloj={Products} />}
    </div>
  );
};

export default ItemListContainer;
