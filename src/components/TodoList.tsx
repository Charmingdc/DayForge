import { useState, useEffect } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { PiArrowBendRightDownBold, PiArrowBendRightUpBold } from "react-icons/pi";

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
            <button>
              <PiArrowBendRightDownBold size={22} />
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
            <button>
               <PiArrowBendRightUpBold size={22} />
            </button>
          </li>
        ))}
      </ul>
    </section>
   </>
  );
};

export default TodoList;