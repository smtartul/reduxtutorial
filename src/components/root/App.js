import { Container } from "reactstrap";
import Dashboard from "../root/Dashboard";
import Navibar from "../navbar/Navibar";

function App() {
  return (
    <Container >
      <Navibar/>
      <Dashboard/>
    </Container>
  );
}

export default App;
