import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const NotFound = () => {
	return (
		<div className={styles.notFoundContainer}>
			<div className={styles.notFoundMessage}>
				404. Такая страница не существует
			</div>
			<Link to={`/`}>
				<Button titleButton="На Главную" />
			</Link>
		</div>
	);
};

export default NotFound;
