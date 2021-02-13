import React from 'react';
import { render, screen } from '@testing-library/react';
import PropValueSection from 'src/components/PropValueSection/index';

describe('PropValueSection test', () => {
    it('should render component', () => {
        render(<PropValueSection data={['street', 'Abbot Kinney']} />);
        expect(screen.getByText('Abbot Kinney')).toBeInTheDocument();
        expect(screen.getByText('street:')).toBeInTheDocument();
    });
});