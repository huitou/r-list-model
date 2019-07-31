/*
    Object Model Test.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { shallow } from "enzyme";

import ListModel from './component';

const initial = [
    { a: 'a1' },
    { a: 'a2' }
];

const clean_state = {
    initial: [],
    value: []
};

const initialised_state = {
    initial,
    value: [...initial]
};

describe('ListModel', () => {
    describe('when mounted without initial props,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<ListModel />);
        })

        it('has a clean initial state', () => {
            expect(wrapper.state()).toEqual(clean_state);
        });

        it('has a value handle which returns its state.value', () => {
            expect(wrapper.instance().value()).toEqual(wrapper.state().value);
        });

        it('has a replace handle which set a new value', () => {
            wrapper.instance().replace([ 'x', 'y', 'z' ]);
            expect(wrapper.instance().value()).toEqual([ 'x', 'y', 'z' ]);
        });

        it('has a reset handle which reset its value to initial', () => {
            wrapper.instance().replace([ 'x', 'y', 'z' ]);
            wrapper.instance().reset();
            expect(wrapper.instance().value()).toEqual([]);
        });

        // ...
    });

    describe('when mounted with an initial props,', () => {
        let wrapper
        beforeEach(() => {
            wrapper = shallow(<ListModel initial={initial} />);
        })

        it('has an initialised state', () => {
            expect(wrapper.state()).toEqual(initialised_state);
        });

        it('has a value handle which returns the inital object', () => {
            expect(wrapper.instance().value()).toEqual(initial);
        });

        // ...
    });

});