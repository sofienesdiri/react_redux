
import { Container } from 'react-bootstrap';
import './App.css';
import ListTask from './Component/ListTask';

function App() {
  return (
    <div>
      <Container>
      <h1>ToDo List</h1>
      <ListTask/>
      </Container>
      
    </div>
  );
}

export default App;
