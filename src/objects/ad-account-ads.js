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
import AdAccountAdsCreateAd from './ad-account-ads-create-ad';

/**
 * AdAccountAds
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountAds extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  gencreatead (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccountAdsCreateAd> {
    return this.createEdge(
      '/ads',
      fields,
      params,
      AdAccountAdsCreateAd,
      pathOverride,
    );
  }
}
