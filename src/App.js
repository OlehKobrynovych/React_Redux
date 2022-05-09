import Container  from 'react-bootstrap/Container';
import './App.css';
import Todos from './component/Todos';


function App() {
  return (
      <Container >
        {/* <Row> */}
          <Todos/>
        {/* </Row> */}
      </Container>
  );
}

export default App;
