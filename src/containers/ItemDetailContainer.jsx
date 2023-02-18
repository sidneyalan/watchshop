import { useEffect } from 'react'
import ItemDetail from "../components/ItemDetail";
import { useState } from "react";
import Products from "../products.json";
import { useParams } from "react-router";



const ItemDetailContainer = () => {
  const { id } = useParams();
  const [relog, setRelog] = useState({});

  const getProduct = () => {
    return new Promise((resolve, reject) => {
      if (Products.length === 0) {
        reject(new Error("No hay Porductos para mostrar"));
      }
      setTimeout(() => {
    
        resolve(Products);
      }, 2000);
    });
  };

  async function fetchingProducts() {
    try {
      const productsFetched = await getProduct();
      setRelog(productsFetched.find((item)=> item.id == id));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchingProducts()
  },[id])
  return (
    <>
    <ItemDetail relog={relog}/>
    
    </>
  )
};

export default ItemDetailContainer;