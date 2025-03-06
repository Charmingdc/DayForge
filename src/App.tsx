import TodoList from './components/TodoList.tsx';
import FooterNav from './components/FooterNav.tsx';
import PWABadge from './PWABadge.tsx';
import './App.css'

type TodoProps = {
  todoText: string;
  isCompleted: boolean;
  todoTime: string;
}

const App = () => {
  const todos: TodoProps[] = [
    { todoText: 'Buy X and rename it Twitter', isCompleted: false, todoTime: 'today'},
    { todoText: 'Call Elon Musk', isCompleted: false, todoTime: 'today'},
    { todoText: 'Tweet about DayForge and mention Satvya', isCompleted: false, todoTime: 'today'},
    { todoText: 'Get to 10k Followers on X', isCompleted: false, todoTime: 'someday'},
    { todoText: 'Buy a new laptop', isCompleted: false, todoTime: 'someday'},
    { todoText: 'Become a CEO', isCompleted: false, todoTime: 'someday'}
  ]
  
  return (
    <>
     <main>
      <TodoList todos={todos} />
     </main>

     <footer>
      <FooterNav />
     </footer>
      
     <PWABadge />
    </>
  )
}

export default App
