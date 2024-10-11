import React from 'react';
import TodoItem from './TodoItem';
import './style.css'; 

interface TodoListProps{
    

}

const Todo: React.FC<TodoListProps> = (props) => {

    return (
        <div className='todo-container'>
            <ol>
                <TodoItem title='eat'/>
                <TodoItem title='code'/>
                <TodoItem title='sleep'/>
                <TodoItem title='repeat'/>
            </ol>
        </div>
    );
    
}


export default Todo;