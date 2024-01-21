import React from 'react';
import { useParams } from 'react-router-dom';
import PageTodoItem from '../components/PageTodoItem/PageTodoItem';
import TodoList from '../components/TodoList/TodoList';

const TodoLayout = ({
	editTodo,
	deleteTodo,
	data,
	searchTerm,
	setSearchTerm,
	checkedSortCheckbox,
	setCheckedSortCheckbox,
}) => {
	const params = useParams();

	return (
		<div>
			{params.id ? (
				<PageTodoItem
					params={params}
					editTodo={editTodo}
					deleteTodo={deleteTodo}
				/>
			) : (
				<TodoList
					data={data}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					checkedSortCheckbox={checkedSortCheckbox}
					setCheckedSortCheckbox={setCheckedSortCheckbox}
				/>
			)}
		</div>
	);
};

export default TodoLayout;
