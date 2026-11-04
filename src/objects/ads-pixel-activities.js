 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';
import AdsPixelActivitiesHead from './ads-pixel-activities-head';

/**
 * AdsPixelActivities
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelActivities extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genhead (fields: Array<string>, params: Object = {}): Promise<*> {
    return this.headEdge(
      '/activities',
      fields,
      params
    );
  }
}
