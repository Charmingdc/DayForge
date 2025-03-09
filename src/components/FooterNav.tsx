import { BsTrash3 } from "react-icons/bs";
import { IoCheckmarkDoneOutline, IoAdd } from "react-icons/io5";

type FooterProps = {
 selectedTodos: string[];
}

const FooterNav: React.FC<FooterProps> = ({ selectedTodos }) => {
 const handleTodoDeletion = (): void => {
	alert(selectedTodos)
 }

 const addNewTodo = () => {
	
 }

 const handleTodoCompletion = (): void => {

 }

 return (
  <section>
	<button onClick={handleTodoDeletion}>
	 <BsTrash3 size={24} />
	</button>

	<button onClick={addNewTodo}>
	  <IoAdd size={24} />
	</button>

    <button onClick={handleTodoCompletion}>
	  <IoCheckmarkDoneOutline size={24} />
	</button>
  </section>
 );
};

export default FooterNav;
