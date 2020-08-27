'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var rSocsCore = require('r-socs-core');
var React = _interopDefault(require('react'));
var propTypes = require('prop-types');

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

class ReadonlySelectableListCollector extends rSocsCore.Collector {}

_defineProperty(ReadonlySelectableListCollector, "handleMap", {
  hfu: {
    hifu: {
      elements: 'elements',
      selectedElement: 'selectedElement'
    },
    hefu: {
      selectElement: 'selectElement',
      deselect: 'deselect'
    }
  }
});

class ReadonlySelectableListComponent extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "elements", () => this.state.elements);

    _defineProperty(this, "selectedElement", () => this.state.selectedElement);

    _defineProperty(this, "selectElement", managedElem => {
      if (this.state.elements.includes(managedElem)) {
        this.setState({
          selectedElement: managedElem
        });
      } else {
        console.log('ListModel: a non-member of the list cannot be selected.');
      }
    });

    _defineProperty(this, "deselect", () => {
      this.setState({
        selectedElement: undefined
      });
    });

    this.state = {
      elements: undefined,
      selectedElement: undefined
    };
  }

  componentDidMount() {
    const elements = this.props.initialElements.map(elem => Object.freeze({
      content: Object.freeze(elem)
    }));
    this.setState({
      elements
    });
  }

  render() {
    return null;
  }

}

_defineProperty(ReadonlySelectableListComponent, "propTypes", {
  initialElements: propTypes.arrayOf(propTypes.any)
});

_defineProperty(ReadonlySelectableListComponent, "defaultProps", {
  initialElements: []
});

/*
    List Component Exporter.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

/*
    List Models/Services Composer.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/
const ReadonlySelectableListModel = rSocsCore.withCollector(ReadonlySelectableListCollector)(ReadonlySelectableListComponent);

exports.ReadonlySelectableListModel = ReadonlySelectableListModel;
