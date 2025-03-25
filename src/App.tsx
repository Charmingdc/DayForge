import { useState } from 'react';
import { Toaster, toast } from 'sonner';

import useScreenWidth from './hooks/useScreenWidth.tsx';
import useTodos from './hooks/useTodos.tsx';
import TodoList from './components/TodoList.tsx';
import FooterNav from './components/FooterNav.tsx';
import PWABadge from './PWABadge.tsx';
import './App.css'


const App = () => {
  const { todos, setTodos, addTodo, deleteTodo } = useTodos();
  const isLargeScreen = useScreenWidth();
  const [selectedTodos, setSelectedTodos] = useState<number[]>([]);

  
  if (isLargeScreen) {
   toast.info('This app is not optimized for large screens yet. Please use a smaller screen size 👨🏼‍🍳');
  }

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
     <Toaster 
      richColors={true}
      closeButton={true}
      toastOptions={{
        style: {
          borderRadius: '2rem',
        },
      }} />
    </>
  )
}

export default App
