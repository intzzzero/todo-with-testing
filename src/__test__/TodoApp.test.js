import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoApp from '../Components/TodoApp';

describe('<TodoApp />', () => {
	it('renders TodoForm and TodoList', () => {
		const { getByText, getByTestId } = render(<TodoApp />);
		getByText('등록');
		getByTestId('TodoList');
	});

	it('renders two defaults todos', () => {
		const { getByText } = render(<TodoApp />);
		getByText('TDD practice');
		getByText('using react-testing-library');
	});

	it('create new todo', () => {
		const { getByPlaceholderText, getByText } = render(<TodoApp />);
		fireEvent.change(getByPlaceholderText('할 일을 입력하세요'), {
			target: {
				value: '새 항목 추가하기'
			}
		});
		fireEvent.click(getByText('등록'));
		getByText('새 항목 추가하기');
	});

	it('toggles todo', () => {
		const { getByText } = render(<TodoApp />);
		const todoText = getByText('TDD practice');
		expect(todoText).toHaveStyle('text-decoration: line-through;');
		fireEvent.click(todoText);
		expect(todoText).not.toHaveStyle('text-decoration: line-through;');
		fireEvent.click(todoText);
	});

	it('removes todo', () => {
		const { getByText } = render(<TodoApp />);
		const todoText = getByText('TDD practice');
		const removeButton = todoText.nextSibling;
		fireEvent.click(removeButton);
		expect(todoText).not.toBeInTheDocument();
	});
});
