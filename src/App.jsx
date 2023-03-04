import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

function App() {

  return (
<ShoppingCartProvider>
    <BrowserRouter>
      <NavBar />
      <img src='/img/banner.jpg' width={"100%"} />
      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a WhatchShop" />}/>
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </ShoppingCartProvider>

  );
}

export default App;
