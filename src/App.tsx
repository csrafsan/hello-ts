import React from 'react';
import './App.css';
import Todo from './components/ToDo';


const App: React.FC = () => {
  return (
    <div>
      <Todo/>
      <Todo/>
      <Todo/>
    </div>
  );
};
export default App;
