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
 * AdgroupMRLSettings
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdgroupMRLSettings extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      mrl_config_id: 'mrl_config_id',
      mrl_is_enabled: 'mrl_is_enabled',
    });
  }

}
