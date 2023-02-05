import Navbar from "./components/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

<>
<div className="container">
<Navbar />
<div className="bienvenidos">

<ItemListContainer greeting={"Bienvenidos a WhatchShop"} />

</div>
</div>
</>

  );
}

export default App
