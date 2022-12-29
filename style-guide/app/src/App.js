import * as React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import Menu from './componentes/Menu'

function App() {
  return (
    <div className="App">
       <Button variant="contained">Olá Mundo</Button>
       <Menu />
    </div>
  );
}

export default App;
