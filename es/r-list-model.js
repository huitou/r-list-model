import { Collector, withCollector } from 'r-socs-core';
import React from 'react';
import { arrayOf, any } from 'prop-types';

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

class ReadonlySelectableListCollector extends Collector {}

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

class ReadonlyMultiSelectableListCollector extends Collector {}

_defineProperty(ReadonlyMultiSelectableListCollector, "handleMap", {
  hfu: {
    hifu: {
      elements: 'elements',
      selectedElements: 'selectedElements'
    },
    hefu: {
      selectElement: 'selectElement',
      deselectElement: 'deselectElement'
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
        console.log(`ReadonlySelectableListComponent: ${managedElem} is not a member of the list hence it cannot be selected.`);
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
  initialElements: arrayOf(any)
});

_defineProperty(ReadonlySelectableListComponent, "defaultProps", {
  initialElements: []
});

/*
    List Component Exporter.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

class ReadonlyMultiSelectableListComponent extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "elements", () => this.state.elements);

    _defineProperty(this, "selectedElements", () => this.state.selectedElements);

    _defineProperty(this, "selectElement", managedElem => {
      if (this.state.elements.includes(managedElem)) {
        if (!this.state.selectedElements.includes(managedElem)) {
          this.setState(({
            selectedElements
          }) => ({
            selectedElements: [...selectedElements, managedElem]
          }));
        } else {
          console.log(`ReadonlyMultiSelectableListComponent: element ${managedElem} is already selected.`);
        }
      } else {
        console.log(`ReadonlyMultiSelectableListComponent: ${managedElem} is not a member of the list hence it cannot be selected.`);
      }
    });

    _defineProperty(this, "deselect", managedElem => {
      this.setState(({
        selectedElements
      }) => ({
        selectedElements: selectedElements.filter(elem => elem !== managedElem)
      }));
    });

    this.state = {
      elements: undefined,
      selectedElements: []
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

_defineProperty(ReadonlyMultiSelectableListComponent, "propTypes", {
  initialElements: arrayOf(any)
});

_defineProperty(ReadonlyMultiSelectableListComponent, "defaultProps", {
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
const ReadonlySelectableListModel = withCollector(ReadonlySelectableListCollector)(ReadonlySelectableListComponent);
const ReadonlyMultiSelectableListModel = withCollector(ReadonlyMultiSelectableListCollector)(ReadonlyMultiSelectableListComponent);

export { ReadonlyMultiSelectableListModel, ReadonlySelectableListModel };
