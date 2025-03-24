import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoAdd } from "react-icons/io5";
import { SlArrowDownCircle } from "react-icons/sl";
import { TodoProps } from "../types";

type FooterProps = {
 setTodos: (todos: TodoProps[] | ((prevTodos: TodoProps[]) => TodoProps[])) => void;
 selectedTodos: number[];
 setSelectedTodos: (todos: number[]) => void;
 addTodo: (todo: TodoProps) => void;
 deleteTodo: (id: number[]) => void;
}

const FooterNav: React.FC<FooterProps> = ({ setTodos, selectedTodos, setSelectedTodos, addTodo, deleteTodo }) => {
 const [showTodoForm, setShowTodoForm] = useState<boolean>(false);
 const [todoTextVal, setTodoTextVal] = useState<string>('');
 const [todoTimeVal, setTodoTimeVal] = useState<'today' | 'someday'>('today');


 const handleTodoDeletion = (): void => {
  deleteTodo(selectedTodos);
  setSelectedTodos([]);
 }

 const handleAddNewTodo = (e: React.FormEvent) => {
  setShowTodoForm(false);

  if (!todoTextVal.trim()) {
    alert('Empty text');
	return
  }

  addTodo({
	id: Math.floor(Math.random() * 1000),
	todoText: todoTextVal,
	todoTime: todoTimeVal,
	isCompleted: false
  });
 }

 const markSelectedAsCompleted = () => {
   setTodos((prevTodos: TodoProps[]) => 
	 prevTodos.map(todo => 
	   selectedTodos.includes(todo.id) ? { ...todo, isCompleted: !todo.isCompleted } : todo
	 )
   );
   setSelectedTodos([]);
 };
 

 return (
  <section>
	<button onClick={handleTodoDeletion}>
	 <BsTrash3 size={24} />
	</button>

	<button onClick={() => setShowTodoForm(true)}>
	  <IoAdd size={24} />
	</button>

    <button onClick={markSelectedAsCompleted}>
	  <IoCheckmarkDoneOutline size={24} />
	</button>


	{ showTodoForm && 
	 <form className="todo-form" onSubmit={handleAddNewTodo}>
	  <button type="button" onClick={() => setShowTodoForm(false)}>
	   <SlArrowDownCircle />
	  </button>

	  <input
	    type='text'
		placeholder='What are we adding?'
		value={todoTextVal}
		onChange={(e) => setTodoTextVal(e.target.value)} />
	  
	  <button type="button">
	   { todoTimeVal }
	  </button>

	  <ul>
	   <li onClick={() => setTodoTimeVal('today')}> today </li>
	   <li onClick={() => setTodoTimeVal('someday')}> someday </li>
	  </ul>

	  <button type="submit">
		Add Todo
	  </button>
	 </form>}
  </section>
 );
};

export default FooterNav;
