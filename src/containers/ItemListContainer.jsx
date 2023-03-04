/*import { useEffect, useState } from 'react'

import ItemList from "../components/ItemList";
import Products from "../products.json";
import { useParams } from "react-router-dom";*/

import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [relojes, setrelojes] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const relojesCollection = collection(db, "reloj");
    getDocs(relojesCollection).then((querySnapshot) => {
      const relojes = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setrelojes(relojes);
    });
  }, []);

  const catFilter = relojes.filter((reloj) => reloj.category === category);
  
  return (
    <>
  <div className='container text-center'>
    {category ? <ItemList relojes={catFilter} />  : <ItemList relojes={relojes} />}
  </div>
  </>
  );
};

export default ItemListContainer;