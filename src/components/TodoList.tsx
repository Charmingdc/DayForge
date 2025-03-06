import { useState, useEffect } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { PiArrowBendRightDown, PiArrowBendRightUp } from "react-icons/pi";

type TodoProps = {
  todoText: string;
  isCompleted: boolean;
  todoTime: string;
};

interface TodoListProps {
  todos: TodoProps[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [todaysTodos, setTodaysTodos] = useState<TodoProps[]>([]);
  const [somedaysTodos, setSomedaysTodos] = useState<TodoProps[]>([]);
  const [selectedTodos, setSelectedTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const todays = todos.filter((todo) => todo.todoTime === 'today');
    const somedays = todos.filter((todo) => todo.todoTime === 'someday');
    
    setTodaysTodos(todays);
    setSomedaysTodos(somedays);
  }, [todos]);

  
  const changeTodoTime = (todo: TodoProps) => {
    (todo.todoTime === 'today') ? todo.todoTime = 'someday' : todo.todoTime = 'today';
 
    setTodaysTodos(todos.filter((t) => t.todoTime === 'today'));
    setSomedaysTodos(todos.filter((t) => t.todoTime === 'someday'));
  }

  const handleTodoSelection = (todo: TodoProps) => {
    const selected = selectedTodos.find((t) => t.todoText === todo.todoText);

    if (selected) {
      setSelectedTodos(selectedTodos.filter((t) => t.todoText !== todo.todoText));
    } else {
      setSelectedTodos([...selectedTodos, todo]);
    }
  };
  
  return (
  <>
    <section className="todo-lists">
      <div className="todo-time-tag">
        <CiCalendarDate size={22} />
        <span> today </span>
        <span> {todaysTodos.length} </span>
      </div>

      <ul>
        {todaysTodos.map((currentTodo, i) => (
          <li key={i} className={selectedTodos.some(t => t.todoText === currentTodo.todoText) ? "selected" : ""}>
            <button 
              onClick={() => handleTodoSelection(currentTodo)}
              className={selectedTodos.some(t => t.todoText === currentTodo.todoText) ? "selected" : ""}
            >
            </button>
            
            <p>{currentTodo.todoText}</p>
            
            <button onClick={() => changeTodoTime(currentTodo)}>
              <PiArrowBendRightDown size={22} />
            </button>
          </li>
        ))}
      </ul>
    </section>

    
    <section className="todo-lists">
      <div className="todo-time-tag">
        <CiCalendarDate size={22} />
        <span> someday </span>
        <span> {somedaysTodos.length} </span>
      </div>

      <ul>
        {somedaysTodos.map((currentTodo, i) => (
          <li key={i}>
            <button 
              onClick={() => handleTodoSelection(currentTodo)}
              className={selectedTodos.some(t => t.todoText === currentTodo.todoText) ? "selected" : ""}
            >
            </button>
            <p>{currentTodo.todoText}</p>
            <button onClick={() => changeTodoTime(currentTodo)}>
               <PiArrowBendRightUp size={22} />
            </button>
          </li>
        ))}
      </ul>
    </section>
   </>
  );
};

export default TodoList;