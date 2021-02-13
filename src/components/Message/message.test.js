import React from 'react';
import Message from 'src/components/Message/index';

import { render } from '@testing-library/react';

const setUp = (props) => render(<Message {...props} />);

describe('message test', () => {
    let component;

    beforeEach(() => {
        component = setUp({ message: 'message' });
    });

    it('should render message component', () => {
        expect(component.getByText('message')).toBeInTheDocument();
    });
});