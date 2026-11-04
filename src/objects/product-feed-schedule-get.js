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
 * ProductFeedScheduleGet
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeedScheduleGet extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      day_of_month: 'day_of_month',
      day_of_week: 'day_of_week',
      feed_schedule_mode: 'feed_schedule_mode',
      hour: 'hour',
      id: 'id',
      interval: 'interval',
      interval_count: 'interval_count',
      minute: 'minute',
      next_scheduled_upload_time: 'next_scheduled_upload_time',
      status: 'status',
      timezone: 'timezone',
      url: 'url',
      username: 'username',
    });
  }

  static get FeedScheduleMode (): Object {
    return Object.freeze({
      automatic: 'AUTOMATIC',
      fixed: 'FIXED',
    });
  }
  static get Status (): Object {
    return Object.freeze({
      active: 'ACTIVE',
      suspended: 'SUSPENDED',
      waiting_on_other_feed: 'WAITING_ON_OTHER_FEED',
    });
  }
}
