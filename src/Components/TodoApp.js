import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
	const [ todos, setTodos ] = useState([
		{
			id: 1,
			text: 'TDD practice',
			done: true
		},
		{
			id: 2,
			text: 'using react-testing-library',
			done: true
		}
	]);

	const nextId = useRef(3);

	const onInsert = useCallback(
		text => {
			setTodos(
				todos.concat({
					id: nextId.current,
					text,
					done: false
				})
			);
			nextId.current += 1;
		},
		[ todos ]
	);

	const onToggle = useCallback(
		id => {
			setTodos(todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
		},
		[ todos ]
	);

	const onRemove = useCallback(
		id => {
			setTodos(todos.filter(todo => todo.id !== id));
		},
		[ todos ]
	);

	return (
		<TodoContainer>
			<TodoForm onInsert={onInsert} />
			<TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
		</TodoContainer>
	);
};

const TodoContainer = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export default TodoApp;
