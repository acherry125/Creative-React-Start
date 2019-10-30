import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';

describe('Test app root component', () => {
    it('test1', () => {
        const wrapper = shallow(<App />);
        expect(2).toEqual(2);
    })
})