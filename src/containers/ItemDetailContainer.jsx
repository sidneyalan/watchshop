import React from 'react'
import ItemDetail from "../components/ItemDetail";
import { useState } from "react";
import Products from "../products.json";
import { useParams } from "react-router";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [relog, setRelog] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0) {
        reject(new Error("No hay Porductos para mostrar"));
      }
      setTimeout(() => {
        const relogFilter = Products.filter((relog) => relog.id == id);
        resolve(relogFilter);
      }, 2000);
    });
  };

  async function fetchingProducts() {
    try {
      const productsFetched = await getProducts();
      setRelog(productsFetched);
    } catch (err) {
      console.log(err);
    }
  }

  fetchingProducts()
  return <ItemDetail relog={Products} />;
};

export default ItemDetailContainer;