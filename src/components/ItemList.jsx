import React from 'react';
import Item from "./Item";




const ItemList = ({ relojes }) => {
  
  return (
<> 
     <div className="itemlist">
        {relojes.map((reloj) => (
          <Item
            key={reloj.id}
            id={reloj.id}
            title={reloj.title}
            description={reloj.description}
            price={reloj.price}
            stock={reloj.stock}
            category={reloj.category}
            url={reloj.url}
          />
            
        ))}

</div>

  </>
  );
};

export default ItemList;