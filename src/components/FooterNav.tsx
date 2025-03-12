import { BsTrash3 } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoAdd } from "react-icons/io5";
import { TodoProps } from "../types";

type FooterProps = {
 todos: TodoProps[];
 selectedTodos: number[];
 setSelectedTodos: (todos: number[]) => void;
 addTodo: (todo: TodoProps) => void;
 deleteTodo: (id: number) => void;
}

const FooterNav: React.FC<FooterProps> = ({ todos, selectedTodos, setSelectedTodos, addTodo, deleteTodo }) => {
 const handleTodoDeletion = (): void => {
  selectedTodos.forEach(id => deleteTodo(id));
  setSelectedTodos([]);
 }

 const handleAddNewTodo = () => {
  addTodo({
	id: Math.floor(Math.random() * 1000),
	todoText: 'New Todo',
	todoTime: 'today',
	isCompleted: false
  });
 }

 const handleTodoCompletion = (): void => {
  for (let x = 0; x < selectedTodos.length; x++) {
	todos.forEach(todo => {
	  if (todo.id === selectedTodos[x]) todo.isCompleted = true;
	});
  }
 }

 return (
  <section>
	<button onClick={handleTodoDeletion}>
	 <BsTrash3 size={24} />
	</button>

	<button onClick={handleAddNewTodo}>
	  <IoAdd size={24} />
	</button>

    <button onClick={handleTodoCompletion}>
	  <IoCheckmarkDoneOutline size={24} />
	</button>
  </section>
 );
};

export default FooterNav;
