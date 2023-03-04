/*import { useEffect } from 'react'
import ItemDetail from "../components/ItemDetail";
import { useState } from "react";
import Products from "../products.json";
import { useParams } from "react-router";*/

/*const ItemDetailContainer = () => {
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
  },[id])*/
  import ItemDetail from "../components/ItemDetail";
  import { useState, useEffect } from "react";
  import { getFirestore, collection, getDocs } from "firebase/firestore";


  const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const db = getFirestore();
      const relojesCollection = collection(db, "reloj");
      getDocs(relojesCollection).then((querySnapshot) => {
        const relojes = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(relojes);
      });
    }, []);


  return (
    <>
    <ItemDetail relojes={data} />
    </>
  )
};

export default ItemDetailContainer;