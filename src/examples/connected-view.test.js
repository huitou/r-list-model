/*
    Connected View Test.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { mount } from "enzyme";

import ConnectedView, { connect_name } from './connected-view';
import BasicView from './basic-view';

const initial = [
    { a: 'a1' },
    { a: 'a2' }
];

const changed = [
    { a: 'a1' },
    { a: 'a2' },
    { a: 'a3' }
];

describe('ConnectedView', () => {
    describe('when mounted,', () => {
        
        let wrapper
        beforeEach(() => {
            wrapper = mount(<ConnectedView hprops={{ initial }} />);
        })

        it('has the HConnect', () => {
            expect(wrapper.find('hConnect(BasicView)').length).toBe(1);
        });

        it('has the HInjector', () => {
            expect(wrapper.find('hInject(BasicView)').length).toBe(1);
        });

        it('has the HCollector', () => {
            expect(wrapper.find('hCollect(ListModel)').length).toBe(1);
        });

        it('has the Logic Model with proper props passed', () => {
            expect(wrapper.find('ListModel').length).toBe(1);
            expect(wrapper.find('ListModel').props().initial).toEqual(initial);
        });

        it('has the Target Component operable with injected props', async () => {
            expect(wrapper.find(BasicView).length).toBe(1);
            expect(wrapper.find(BasicView).props()[connect_name].hifu.value).toEqual(initial);

            await wrapper.find(BasicView).props()[connect_name].hefu.replace(changed);
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name].hifu.value).toEqual(changed);

            await wrapper.find(BasicView).props()[connect_name].hefu.reset();
            wrapper.update();
            expect(wrapper.find(BasicView).props()[connect_name].hifu.value).toEqual(initial);
        });
    });
});
