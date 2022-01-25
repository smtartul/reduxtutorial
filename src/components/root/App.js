import { Container } from "reactstrap";
import Dashboard from "../root/Dashboard";
import Navbar from "../navbar/Navbar";

function App() {
  return (
    <Container >
      <Navbar/>
      <Dashboard/>
    </Container>
  );
}

export default App;
