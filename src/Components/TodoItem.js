import React, { useCallback } from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, onToggle, onRemove }) => {
	const { id, text, done } = todo;

	const toggle = useCallback(() => onToggle(id), [ id, onToggle ]);
	const remove = useCallback(() => onRemove(id), [ id, onRemove ]);

	return (
		<TodoItemContainer>
			<span style={{ textDecoration: done ? 'line-through' : 'none' }} onClick={toggle}>
				{text}
			</span>
			<button onClick={remove}>삭제</button>
		</TodoItemContainer>
	);
};

const TodoItemContainer = styled.li`
	list-style: none;
	width: 400px;
	height: 30px;
	position: relative;
	margin-bottom: 15px;
	font-size: 18px;
	color: rgba(0, 0, 0, 0.8);

	span {
		display: inline-block;
		width: 290px;
		color: rgba(0, 0, 0, 0.8);
		cursor: pointer;
	}

	button {
		width: 60px;
		height: 30px;
		margin-left: 15px;
		border: none;
		color: rgba(0, 0, 0, 0.8);
		background-color: #fff;
		cursor: pointer;
		outline: none;
	}
`;

export default TodoItem;
