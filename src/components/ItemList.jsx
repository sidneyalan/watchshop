import React from 'react';
import Item from "./Item";




const ItemList = ({ items }) => {
  return (
    <>
        {items.map((relog) => (
          <Item
            key={relog.id}
            id={relog.id}
            title={relog.title}
            description={relog.description}
            price={relog.price}
            stock={relog.stock}
            category={relog.category}
            url={relog.url}
          />
            
        ))}



  </>
  );
};

export default ItemList;