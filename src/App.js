import React from 'react';
import './App.css';
import Counter from './Component/Counter';
import { Provider } from 'react-redux';
import Store  from './store/index';
function App() {
  return (
    <div>
      <Provider  store={Store}>
   <Counter />
      </Provider>
 
    </div>
  );
}

export default App;
