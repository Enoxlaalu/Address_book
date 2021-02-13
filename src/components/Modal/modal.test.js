import React from 'react';
import { unmountComponentAtNode  } from 'react-dom';
import Modal from 'src/components/Modal/index';

import { render, act, screen, fireEvent } from '@testing-library/react';

describe('modal test', () => {
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

    it('should not render modal component without opened prop', () => {
        act(() => {
            render(<Modal />, container);
        });
        expect(screen.queryByTestId('modal')).toBeNull();
    });

    it('should render modal component', () => {
        act(() => {
            render(<Modal opened closeModal={() => {}} />, container);
        });
        expect(screen.getByTestId('modal')).toBeInTheDocument();
        const cross = document.querySelector('.cross');
        act(() => {
            fireEvent.click(cross);
        });
        expect(screen.queryByTestId('modal')).toBeNull();
    });
    it('should render headerText and body', () => {
        act(() => {
            render(<Modal opened headerText={'headerText'} body={<span>bodyText</span>} />, container);
        });
        expect(screen.getByText('headerText')).toBeInTheDocument();
        expect(screen.getByText('bodyText')).toBeInTheDocument();
    });
});