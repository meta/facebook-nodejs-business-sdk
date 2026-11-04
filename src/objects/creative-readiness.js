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

/**
 * CreativeReadiness
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class CreativeReadiness extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      ad_ids: 'ad_ids',
      analysis_status: 'analysis_status',
      asset_type: 'asset_type',
      checks: 'checks',
      creative_id: 'creative_id',
    });
  }

}
