import React from 'react';
import ItemDetail from "../components/ItemDetail";
import { useState } from "react";
import Products from "../products.json";
import { useParams } from "react-router";
import {useEffect} from 'react';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [relog, setRelog] = useState({});
  const getProduct = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0) {
        reject(new Error("No hay Porductos para mostrar"));
      }
      setTimeout(() => {
        const relogFilter = Products.find((relog) => relog.id == id);
        resolve(relogFilter);
      }, 2000);
    });
  };

  async function fetchingProducts() {
    try {
      const productsFetched = await getProduct();
      setRelog(productsFetched);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchingProducts()

  },[id])
  return <ItemDetail relog={relog} />;
};

export default ItemDetailContainer;

