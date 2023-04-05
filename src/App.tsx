import { Container } from "react-bootstrap"
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";

function App() {
  return <Container className='mb-4'>
    <Navbar />
    <Outlet />
  </Container>
}

export default App
