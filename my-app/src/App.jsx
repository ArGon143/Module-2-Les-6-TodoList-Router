import TodoPage from './components/TodoPage/TodoPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import TodoLayout from './layout/TodoLayout';

export const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<TodoPage />}>
					<Route path="todo/:id?" element={<TodoLayout />} />
				</Route>

				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	);
};
