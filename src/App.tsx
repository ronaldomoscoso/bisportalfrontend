import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Visitors } from './Pages/Visitors/Visitors';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/visitors">Home</Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <main>

      </main>
      <footer>

      </footer>
      <Routes>
        <Route path='/visitors' element={<Visitors id='00136CD6A3D3AE82'  />}>Visitors</Route>
      </Routes>
    </div>
  );
}

export default App;