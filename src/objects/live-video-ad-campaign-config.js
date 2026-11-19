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
 * LiveVideoAdCampaignConfig
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoAdCampaignConfig extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      declared_live_seconds: 'declared_live_seconds',
      id: 'id',
      live_cadence: 'live_cadence',
      live_video_ad_type: 'live_video_ad_type',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): LiveVideoAdCampaignConfig {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
