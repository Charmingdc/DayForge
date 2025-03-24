import { useState } from 'react';

import useTodos from './hooks/useTodos.tsx';
import TodoList from './components/TodoList.tsx';
import FooterNav from './components/FooterNav.tsx';
import PWABadge from './PWABadge.tsx';
import './App.css'


const App = () => {
  const { todos, setTodos, addTodo, deleteTodo } = useTodos();
  const [selectedTodos, setSelectedTodos] = useState<number[]>([]);

  
  return (
    <>
     <main>
      <TodoList 
        todos={todos}
        selectedTodos={selectedTodos} 
        setSelectedTodos={setSelectedTodos} />
     </main>

     <footer>
      <FooterNav 
        setTodos={setTodos}
        selectedTodos={selectedTodos}
        setSelectedTodos={setSelectedTodos}
        addTodo={addTodo}
        deleteTodo={deleteTodo} />
     </footer>
      
     <PWABadge />
    </>
  )
}

export default App
