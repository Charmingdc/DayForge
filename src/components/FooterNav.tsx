import { BsTrash3 } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoAdd } from "react-icons/io5";
import { TodoProps } from "../types";

type FooterProps = {
 setTodos: (todos: TodoProps[] | ((prevTodos: TodoProps[]) => TodoProps[])) => void;
 selectedTodos: number[];
 setSelectedTodos: (todos: number[]) => void;
 addTodo: (todo: TodoProps) => void;
 deleteTodo: (id: number[]) => void;
}

const FooterNav: React.FC<FooterProps> = ({ setTodos, selectedTodos, setSelectedTodos, addTodo, deleteTodo }) => {

 const handleTodoDeletion = (): void => {
  deleteTodo(selectedTodos);
  setSelectedTodos([]);
 }

 const handleAddNewTodo = () => {
  addTodo({
	id: Math.floor(Math.random() * 1000),
	todoText: 'New Todo',
	todoTime: 'today',
	isCompleted: false
  });
  alert('Added');
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

	<button onClick={handleAddNewTodo}>
	  <IoAdd size={24} />
	</button>

    <button onClick={markSelectedAsCompleted}>
	  <IoCheckmarkDoneOutline size={24} />
	</button>
  </section>
 );
};

export default FooterNav;
