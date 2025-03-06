import TodoList from './components/TodoList.tsx';
import FooterNav from './components/FooterNav.tsx';
import PWABadge from './PWABadge.tsx';
import './App.css'

const App = () => {
  return (
    <>
     <main>
      <TodoList todoTime='today' />

      <TodoList todoTime='someday' />
     </main>

     <footer>
      <FooterNav />
     </footer>
      
     <PWABadge />
    </>
  )
}

export default App
