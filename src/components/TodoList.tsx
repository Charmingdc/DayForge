import { CiCalendarDate } from "react-icons/ci";

type TodoProps = {
	todoTime: string;
}

const TodoList: React.FC<TodoProps> = ({ todoTime }) => {
	return (
		<section className='todo-lists'> 
		  <div className='todo-time-tag'>
		 	 <CiCalendarDate size={22} />
				<span> { todoTime } </span>
				<span> 3 </span>
		  </div>
			
		  <ul>
			  <li></li>
			  <li></li>
				<li></li>
		  </ul>
	  </section>
	)
}

export default TodoList;