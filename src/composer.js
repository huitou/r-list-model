/*
    List Models/Services Composer.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import {
    ReadonlySelectableListCollector,
    ReadonlyMultiSelectableListCollector,
    SelectableListCollector,
} from './collectors';

import {
    ReadonlySelectableListComponent,
    ReadonlyMultiSelectableListComponent,
    SelectableListComponent
} from './components';

const ReadonlySelectableListModel = withCollector(ReadonlySelectableListCollector)(ReadonlySelectableListComponent);
const ReadonlyMultiSelectableListModel = withCollector(ReadonlyMultiSelectableListCollector)(ReadonlyMultiSelectableListComponent);
const SelectableListModel = withCollector(SelectableListCollector)(SelectableListComponent);

export {
    ReadonlySelectableListModel,
    ReadonlyMultiSelectableListModel,
    SelectableListModel,
};
