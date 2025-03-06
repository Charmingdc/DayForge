import { useState, useEffect } from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { PiArrowBendRightDownBold, PiArrowBendRightUpBold } from "react-icons/pi";
				
type TodoProps = {
	todoText: string;
	isCompleted: boolean;
	todoTime: string;
};

const TodoList: React.FC<TodoProps> = ( todos ) => {
	const [todaysTodos, setTodaysTodos] = useState<TodoProps[]>([]);

	useEffect(() => {
		const todays = todos.filter((todo: TodoProps) => todo.todoTime === 'today');
		setTodaysTodos(todays);
	}, [todaysTodos]);
	
	return (
		<section className="todo-lists">
			<div className="todo-time-tag">
				<CiCalendarDate size={22} />
				<span> { todos.todoTime } </span>
				<span> 3 </span>
			</div>

			<ul>
				{todaysTodos.map((currentTodo, i) => (
			   <li key={i}>
				   <button> </button>
					 <p> 
						 { currentTodo.todoText }
					 </p>

					 <button>
					  <PiArrowBendRightDownBold size={22} />
				   </button>
				 </li>
				))}
			</ul>
		</section>
	);
};

export default TodoList;
