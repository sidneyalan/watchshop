import { useEffect, useState } from 'react'

import ItemList from "../components/ItemList";
import Products from "../products.json";
import { useParams } from "react-router-dom";



const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([])
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
      setItems(datosFetched)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{

    fetchingProducts()
  },[])


  
  return (
  <div className='container text-center'>
    <div className='row'>
      <div className='col-md-12'>
        <h2 className="display-7">{greeting}</h2>
      </div>
    </div>
    <ItemList items={items} /> 
  </div>
  );
};

export default ItemListContainer;