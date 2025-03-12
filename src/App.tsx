import { useState } from 'react';

import useTodos from
import TodoList from './components/TodoList.tsx';
import FooterNav from './components/FooterNav.tsx';
import PWABadge from './PWABadge.tsx';
import './App.css'

type TodoProps = {
  id: string;
  todoText: string;
  isCompleted: boolean;
  todoTime: string;
}

const App = () => {
  /*
  const todos: TodoProps[] = [
    { id: '1', todoText: 'Buy X and rename it Twitter', isCompleted: false, todoTime: 'today'},
    { id: '2', todoText: 'Call Elon Musk', isCompleted: false, todoTime: 'today'},
    { id: '3', todoText: 'Tweet about DayForge and mention Satvya', isCompleted: false, todoTime: 'today'},
    { id: '4', todoText: 'Get to 10k Followers on X', isCompleted: false, todoTime: 'someday'},
    { id: '5', todoText: 'Buy a laptop', isCompleted: false, todoTime: 'someday'},
    { id: '6', todoText: 'Become a CEO', isCompleted: false, todoTime: 'someday'}
  ];*/

  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);

  
  return (
    <>
     <main>
      <TodoList 
        todos={todos}
        selectedTodos={selectedTodos} 
        setSelectedTodos={setSelectedTodos} />
     </main>

     <footer>
      <FooterNav selectedTodos={selectedTodos} />
     </footer>
      
     <PWABadge />
    </>
  )
}

export default App
