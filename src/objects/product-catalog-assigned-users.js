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
import ProductCatalogAssignedUsersPost from './product-catalog-assigned-users-post';

/**
 * ProductCatalogAssignedUsers
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogAssignedUsers extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogAssignedUsersPost> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      ProductCatalogAssignedUsersPost,
      pathOverride,
    );
  }
}
