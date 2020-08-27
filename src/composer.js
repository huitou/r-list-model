/*
    List Models/Services Composer.

    Copyright (c) 2019-2020 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import { ReadonlySelectableListCollector } from './collectors/index';
import { ReadonlySelectableListComponent } from './components/index';

const ReadonlySelectableListModel = withCollector(ReadonlySelectableListCollector)(ReadonlySelectableListComponent);

export { ReadonlySelectableListModel };
