import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] =  useState([]);

  const removeItem = (id) => {
    Swal.fire({
      title: '¿Está seguro de que desea eliminar este producto?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter((y) => y.id !== id));
     
        Swal.fire(
          'Eliminado',
          'El producto ha sido eliminado correctamente.',
          'success'
        );
   
      }
    });
  };

  const clear = () => {
    setCart ([])
  };
  
  const total = () => {
    let total = 0;
    cart.forEach(prod => {
      total = total + prod.price * prod.quantity
    })
    return total;
  }

  const isInCart = (cart, item) => {
    return cart.some( x => x.id === item.id )
  };
  const addItem = (item) => {
    if (isInCart(cart, item)) {
      setCart(joinItem(cart, item))
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'EL PRODUCTO YA FUE AGREGADO. DIRIJASE AL CARRITO DE COMPRAS',
        showConfirmButton: false,
        timer: 1500
    })
    } else {
      setCart([...cart, item])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'PRODUCTO CORRECTAMENTE AGREGADO',
        showConfirmButton: false,
        timer: 1500
    })
    }
  };
  return (
    <>
    <CartContext.Provider value={{cart, setCart, removeItem, isInCart, total, clear, addItem}}>
      {children}
    </CartContext.Provider>
    </>
  );
};

export default CartProvider;