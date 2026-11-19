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
import AdAccountNamingTemplatesPost from './ad-account-naming-templates-post';

/**
 * AdAccountNamingTemplates
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountNamingTemplates extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<AdAccountNamingTemplatesPost> {
    return this.createEdge(
      '/naming_templates',
      fields,
      params,
      AdAccountNamingTemplatesPost,
      pathOverride,
    );
  }
}
