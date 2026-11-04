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
import ProductCatalogExternalEventSourcesPost from './product-catalog-external-event-sources-post';

/**
 * ProductCatalogExternalEventSources
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductCatalogExternalEventSources extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      id: 'id',
    });
  }


  genpost (fields: Array<string>, params: Object = {}, pathOverride?: ?string = null): Promise<ProductCatalogExternalEventSourcesPost> {
    return this.createEdge(
      '/external_event_sources',
      fields,
      params,
      ProductCatalogExternalEventSourcesPost,
      pathOverride,
    );
  }
}
