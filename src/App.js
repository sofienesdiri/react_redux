
import { Container } from 'react-bootstrap';
import './App.css';
import ListTask from './Component/ListTask';
import { Text } from '@chakra-ui/react'
function App() {
  return (
    <div>
      
      <Container className='main' >
        <Text fontSize='6xl'>ToDo List</Text>
        <br/>
        <ListTask/>
      </Container>
      
    </div>
  );
}

export default App;
