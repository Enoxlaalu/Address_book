import React from 'react';
import Header from 'src/components/Header/index';

import { render, screen } from '@testing-library/react';

const setUp = (props) => render(<Header {...props} />);

describe('header test', () => {
    beforeEach(() => {
        setUp({ title: 'headerTest', buttonText: 'buttonText' });
    });

    it('should render header and button component', () => {
        expect(screen.getByText('headerTest')).toBeInTheDocument();
        expect(screen.getByText('buttonText')).toBeInTheDocument();
    });
});