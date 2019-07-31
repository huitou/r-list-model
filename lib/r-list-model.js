'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rSocsCore = require('r-socs-core');
var React = _interopDefault(require('react'));
var propTypes = require('prop-types');
require('ramda');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

class ListCollector extends rSocsCore.Collector {}

_defineProperty(ListCollector, "handleMap", {
  hfu: {
    hifu: {
      value: 'value'
    },
    hefu: {
      clear: 'clear',
      reset: 'reset',
      replace: 'replace'
    }
  }
});

class ListModel extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "value", () => this.state.value);

    _defineProperty(this, "clear", () => {
      this.setState({
        value: []
      });
    });

    _defineProperty(this, "reset", () => {
      this.setState(({
        initial
      }) => ({
        value: initial
      }));
    });

    _defineProperty(this, "replace", array => {
      this.setState({
        value: array
      });
    });

    this.state = {
      initial: props.initial,
      value: props.initial
    };
  }

  render() {
    return null;
  }

}

_defineProperty(ListModel, "propTypes", {
  initial: propTypes.arrayOf(propTypes.object)
});

_defineProperty(ListModel, "defaultProps", {
  initial: []
});

/*
    Collected List Model.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
const CollectedListModel = rSocsCore.withCollector(ListCollector)(ListModel);

exports.CollectedListModel = CollectedListModel;
