import React, { useState } from 'react';
import styles from './EditTodo.module.css';
import Button from '../Button/Button';

function EditTodo({ editTodo, handleEdit, data }) {
	const [isEditTodo, setIsEditTodo] = useState(data.title);

	const handleChange = (event) => {
		setIsEditTodo(event.target.value);
	};

	const handleEditTodo = () => {
		editTodo(data.id, isEditTodo);
	};

	return (
		<div>
			<textarea
				className={styles.todoInput}
				autoFocus
				rows={5}
				name={data.id}
				defaultValue={data.title}
				onChange={handleChange}
			/>
			<div className={styles.todoEditContainer}>
				<Button onClick={handleEditTodo} titleButton="Сохранить" />
				<Button onClick={handleEdit} titleButton="Отмена" />
			</div>
		</div>
	);
}

export default EditTodo;
