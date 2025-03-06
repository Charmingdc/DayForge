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

  useEffect(() => {
    const todays = todos.filter((todo) => todo.todoTime === 'today');
    const somedays = todos.filter((todo) => todo.todoTime === 'someday');
    
    setTodaysTodos(todays);
    setSomedaysTodos(somedays);
  }, [todos]);

  
  const changeTodoTime = (todo: TodoProps) => {
    if (todo.todoTime === 'today') {
      todo.todoTime = 'someday';
    } else {
      todo.todoTime = 'today';
    }

    // Recalculate todos after changing the time
    const updatedTodays = todos.filter((t) => t.todoTime === 'today');
    const updatedSomedays = todos.filter((t) => t.todoTime === 'someday');
    
    setTodaysTodos(updatedTodays);
    setSomedaysTodos(updatedSomedays);
    console.log('Current todo:', todo);
  }

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
          <li key={i}>
            <button> </button>
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
            <button> </button>
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