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
 * OfflineConversionDataSetUploadsGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class OfflineConversionDataSetUploadsGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      data: 'data',
      paging: 'paging',
    });
  }

  static get Order (): Object {
    return Object.freeze({
      ascending: 'ASCENDING',
      descending: 'DESCENDING',
    });
  }
  static get SortBy (): Object {
    return Object.freeze({
      api_calls: 'API_CALLS',
      creation_time: 'CREATION_TIME',
      event_time_max: 'EVENT_TIME_MAX',
      event_time_min: 'EVENT_TIME_MIN',
      first_upload_time: 'FIRST_UPLOAD_TIME',
      is_excluded_for_lift: 'IS_EXCLUDED_FOR_LIFT',
      last_upload_time: 'LAST_UPLOAD_TIME',
    });
  }
}
