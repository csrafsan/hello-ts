import React from 'react';
import './App.css';
import Todo from './components/ToDo';
import { title } from 'process';

const myTodoItems = [
  {

    id: 1,
    title: "I need to finish my hw",
  },

  {
    id: 2,
    title: "I need to watch ts tutorials",
  },
  {
    id: 3,
    title: "I need to go to Masjid",
  },
  {
    id: 4,
    title: "I need to go to School",
  },
]

const App: React.FC = () => {
  return (
    <div>
      <Todo items = {myTodoItems} />
      
    </div>
  );
};
export default App;
