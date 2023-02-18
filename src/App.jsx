import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Contact from "./components/Contact";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <img src='./src/assets/img/banner.jpg' width={"100%"} />
      <Routes>
      <Route exact path="/" element={<ItemListContainer greeting="Bienvenidos a WhatchShop" />}/>
        <Route exact path="/catalogue" element={<ItemListContainer />} />
        <Route exact path="/category/:category" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
