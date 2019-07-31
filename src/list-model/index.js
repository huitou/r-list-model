/*
    Collected List Model.

    Copyright (c) 2019 Riverside Software Engineering Ltd. All rights reserved.

    Licensed under the MIT License. See LICENSE file in the project root for full license information.
*/

import { withCollector } from 'r-socs-core';

import ListCollector from './collector';
import ListModel from './component';

const CollectedListModel = withCollector(ListCollector)(ListModel);

export default CollectedListModel;