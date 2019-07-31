/*
    Object Model.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import React from 'react';
import { arrayOf, object } from 'prop-types';
import { mergeDeepRight } from 'ramda';

class ListModel extends React.Component {
    static propTypes = {
        initial: arrayOf(object)
    };

    static defaultProps = {
        initial: []
    };

    constructor(props) {
        super(props);
        this.state = {
            initial: props.initial,
            value: props.initial,
        };
    }

    value = () => this.state.value;
    
    clear = () => {
        this.setState({ value: [] });
    };

    reset = () => {
        this.setState(({ initial }) => ({ value: initial }));
    };

    replace = (array) => {
        this.setState({ value: array });
    };

    render() {
        return null;
    }
}

export default ListModel;
