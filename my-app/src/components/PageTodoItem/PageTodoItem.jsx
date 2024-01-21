import React, { useEffect, useState } from 'react';
import styles from './PageTodoItem.module.css';
import EditTodo from '../EditTodo/EditTodo';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const PageTodoItem = ({ deleteTodo, editTodo, params }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [checked, setChecked] = useState(false);
	const [todo, setTodo] = useState([]);
	const [todoEdit, setTodoEdit] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		if (params.id === undefined) return;

		const fetchTodo = (id) => {
			fetch(`http://localhost:3005/todos/${id}`)
				.then((loadedData) => loadedData.json())
				.then((loadedTodos) => {
					if (Object.keys(loadedTodos).length === 0) {
						navigate('/404');
						return;
					} else {
						setTodo(loadedTodos.title);
						setTodoEdit(loadedTodos);
					}
				});
		};

		fetchTodo(params.id);
	}, [navigate, params.id]);

	const handleEdit = () => {
		setIsEdit((prevState) => !prevState);
	};

	const handleDelete = () => {
		deleteTodo(todoEdit.id);
	};

	const checkboxChange = () => {
		setChecked(!checked);
	};

	return (
		<>
			{isEdit ? (
				<EditTodo data={todoEdit} handleEdit={handleEdit} editTodo={editTodo} />
			) : (
				<div className={styles.todoContainer}>
					<div className={styles.todo}> {todo} </div>
					<div className={styles.todoBtnContainer}>
						<input
							type="checkbox"
							checked={checked}
							onChange={checkboxChange}
						/>

						<Link to={`/`}>
							<Button
								disabled={!checked}
								onClick={handleDelete}
								titleButton="Удалить"
							/>
						</Link>

						<Button onClick={handleEdit} titleButton="Редактировать" />

						<Link to={`/`}>
							<Button titleButton="Назад" />
						</Link>
					</div>
				</div>
			)}
		</>
	);
};

export default PageTodoItem;
