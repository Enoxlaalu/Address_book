import React from 'react';
import Loader from 'src/components/Loader/index';

const { shallow } = global;

const setUp = (props) => shallow(<Loader {...props} />);

describe('loader test', () => {
    let component;

    beforeEach(() => {
        component = setUp();
    });

    it('should render loader component', () => {
        expect(component.find('.loader')).toHaveLength(1);
    });
});