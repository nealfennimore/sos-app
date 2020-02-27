import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../index';

describe( 'App', () => {
    test( 'should match snapshot', () => {
        const component = renderer.create(
            <App />,
        );
        expect( component.toJSON() ).toMatchSnapshot();
    } );
    it( 'should have correct content', () => {
        const wrapper = mount( <App /> );
        expect( wrapper.text() ).toMatchSnapshot();
    } );
} );
