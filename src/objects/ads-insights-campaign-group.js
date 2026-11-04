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
import AdsInsightsCampaignGroupPost from './ads-insights-campaign-group-post';

/**
 * AdsInsightsCampaignGroup
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsInsightsCampaignGroup extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdsInsightsCampaignGroupPost> {
    return this.createEdge(
      '/insights',
      fields,
      params,
      AdsInsightsCampaignGroupPost,
      pathOverride,
    );
  }
}
