import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
	it('matches snapshot', () => {
		const utils = render(<Profile username='codeAmeba' name='정수영' />);
		expect(utils.container).toMatchSnapshot();
	});

	it('shows the props correctly', () => {
		const utils = render(<Profile username='codeAmeba' name='정수영' />);
		utils.getByText('codeAmeba');
		utils.getByText('(정수영)');
		utils.getByText(/정/);
	});
});
