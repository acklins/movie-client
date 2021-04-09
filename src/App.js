import React from 'react';
import Home from './pages/Home';
import routes from './config/routes';
import './App.css';

function App()  {
  return (
    <div className="App">
      { routes }
    </div>
  );
}

export default App;
