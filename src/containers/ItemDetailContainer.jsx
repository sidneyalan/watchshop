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