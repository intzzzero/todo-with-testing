import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const TodoForm = ({ onInsert }) => {
	const [ value, setValue ] = useState('');

	const onChange = useCallback(e => {
		setValue(e.target.value);
	}, []);

	const onSubmit = useCallback(
		e => {
			onInsert(value);
			setValue('');
			e.preventDefault();
		},
		[ onInsert, value ]
	);

	return (
		<TodoFormContainer onSubmit={onSubmit}>
			<input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
			<button type='submit'>등록</button>
		</TodoFormContainer>
	);
};

const TodoFormContainer = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10%;
	margin-bottom: 20px;

	input {
		width: 250px;
		height: 30px;
		border: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.5);
		font-size: 18px;
		outline: none;
		padding: 0 20px;
		color: rgba(0, 0, 0, 0.8);

		&::placeholder {
			text-align: center;
			font-size: 18px;
			color: rgba(0, 0, 0, 0.8);
		}
	}

	button {
		width: 60px;
		height: 30px;
		margin-left: 15px;
		color: rgba(0, 0, 0, 0.8);
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.5);
		border-radius: 5px;
		cursor: pointer;
		outline: none;
	}
`;

export default TodoForm;
