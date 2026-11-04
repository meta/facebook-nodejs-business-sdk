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
 * AdsPixelActivitiesHead
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdsPixelActivitiesHead extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
    });
  }

  static get EventType (): Object {
    return Object.freeze({
      add_dataset_to_business: 'ADD_DATASET_TO_BUSINESS',
      add_user_to_dataset: 'ADD_USER_TO_DATASET',
      create_custom_audience: 'CREATE_CUSTOM_AUDIENCE',
      create_custom_conversion: 'CREATE_CUSTOM_CONVERSION',
      dataset_assign_to_adacct: 'DATASET_ASSIGN_TO_ADACCT',
      dataset_autotrack_on_adacct: 'DATASET_AUTOTRACK_ON_ADACCT',
      dataset_disable_autotrack_on_adacct: 'DATASET_DISABLE_AUTOTRACK_ON_ADACCT',
      dataset_unassign_from_adacct: 'DATASET_UNASSIGN_FROM_ADACCT',
      remove_user_from_dataset: 'REMOVE_USER_FROM_DATASET',
      share_custom_audience: 'SHARE_CUSTOM_AUDIENCE',
      unshare_custom_audience: 'UNSHARE_CUSTOM_AUDIENCE',
      update_custom_conversion: 'UPDATE_CUSTOM_CONVERSION',
      update_user_role_on_dataset: 'UPDATE_USER_ROLE_ON_DATASET',
    });
  }
}
