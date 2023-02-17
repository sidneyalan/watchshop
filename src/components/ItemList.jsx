import React from 'react';
import Item from "./Item";



const ItemList = ({ relog }) => {
  return (
    <>
      <div className="container bg-danger">
        {relog?.map((relog) => (
          <Item
            key={relog.id}
            id={relog.id}
            name={relog.name}
            description={relog.description}
            price={relog.price}
            stock={relog.stock}
            category={relog.category}
          />
        ))}
      </div>


  </>
  );
};

export default ItemList;