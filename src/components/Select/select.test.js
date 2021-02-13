import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import Select from 'src/components/Select/index';
import { render, act, screen, fireEvent } from '@testing-library/react';

describe('select test', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('should render select component', () => {
        render(<Select />);
        expect(screen.getByTestId('select')).toBeInTheDocument();
        expect(screen.getByTestId('list')).not.toHaveClass('opened');
        expect(screen.getByText(/All nationalities/i)).toBeInTheDocument();
    });

    it('should open the dropdown', () => {
        render(<Select />);

        act(() => {
            fireEvent.click(screen.getByTestId('select'));
        });

        expect(screen.getByTestId('list')).toHaveClass('opened');
    });

    it('should display value from props', () => {
        render(<Select value={'testValue'} />);

        expect(screen.getByText(/testValue/i)).toBeInTheDocument();
        expect(screen.queryByText(/All nationalities/i)).toBeNull();
    });
});