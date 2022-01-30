import { Container } from "reactstrap";
import Dashboard from "../root/Dashboard";
import Navibar from "../navbar/Navibar";
import {Routes,Route} from "react-router-dom"
import CartDetail from "../cart/CartDetail"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container >
      <Navibar/>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/products" exact element={<Dashboard/>} />
        <Route path="/cart" exact element={<CartDetail/>} />
        <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct/>} />
        <Route path="/saveproduct" element={<AddOrUpdateProduct/>} />

        
      </Routes>
      
    </Container>
  );
}

export default App;
