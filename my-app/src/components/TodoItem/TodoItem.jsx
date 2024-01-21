import React from 'react';
import styles from './TodoItem.module.css';

const TodoItem = ({ ...props }) => {
	return <div className={styles.todo}>{props.title}</div>;
};

export default TodoItem;
