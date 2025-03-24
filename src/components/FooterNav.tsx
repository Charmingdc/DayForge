import { useState } from "react";
import { toast } from "sonner";

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
 const [showTimeOptions, setShowTimeOptions] = useState<boolean>(false);
 const [todoTextVal, setTodoTextVal] = useState<string>('');
 const [todoTimeVal, setTodoTimeVal] = useState<'today' | 'someday'>('today');


 const handleTodoDeletion = (): void => {
  if (selectedTodos.length === 0) {
   toast.error('No todo selected 🤓');
   return;
  }

  deleteTodo(selectedTodos);

  toast.success('Selected todos deleted 👻');
  setSelectedTodos([]);
 }

 const handleAddNewTodo = (e: React.FormEvent) => {
  e.preventDefault();
  if (!todoTextVal.trim()) {
   toast.error('Todo text cannot be empty');
   return
  }

  addTodo({
	id: Math.floor(Math.random() * 1000),
	todoText: todoTextVal,
	todoTime: todoTimeVal,
	isCompleted: false
  });

  toast.success('Todo addded ✅');
  setTodoTextVal('');
  setTodoTimeVal('today');
  setShowTimeOptions(false);
  setShowTodoForm(false);
 }

 const markSelectedAsCompleted = () => {
   if (selectedTodos.length === 0) {
    toast.error('No todo selected 🤓');
	return;
   }

   setTodos((prevTodos: TodoProps[]) => 
	 prevTodos.map(todo => 
	   selectedTodos.includes(todo.id) ? { ...todo, isCompleted: !todo.isCompleted } : todo
	 )
   );

   toast.success('Selected todos completion state changed  🎉');
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
	 <div className="overlay">
	  <form className="todo-form" onSubmit={handleAddNewTodo}>
	   <button type="button" className="hide-form-btn" onClick={() => setShowTodoForm(false)}>
	    <SlArrowDownCircle size={35} />
	   </button>

	   <input
	     type='text'
		 placeholder='What are we adding?'
		 value={todoTextVal}
	  	 onChange={(e) => setTodoTextVal(e.target.value)} />
	  
	   <button type="button" className="time-selector" onClick={() => setShowTimeOptions(!showTimeOptions)}>
	    Select time: { todoTimeVal }
	   </button>

	   <ul className={showTimeOptions ? 'timeval-options active-timeval-options' : 'timeval-options'}>
	    <li onClick={() => setTodoTimeVal('today')}> today </li>
	    <li onClick={() => setTodoTimeVal('someday')}> someday </li>
	   </ul>

	   <button type="submit" className="submit-form-btn">
		 Add Todo
	   </button>
	  </form>
	</div>}
  </section>
 );
};

export default FooterNav;
