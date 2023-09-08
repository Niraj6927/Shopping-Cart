import './App.css';
//import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
//import { itemContext } from './itemContext';
//import { totalContext } from './totalContext';
import CustonItemContext from './itemContext';

function App() {
  
  return (
    <CustonItemContext>
      {/* /<totalContext.Provider value={{total, setTotal}}> */}
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
        {/* </totalContext.Provider> */}
      </CustonItemContext>
  );
}
export default App;
