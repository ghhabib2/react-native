/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

// This is to sync with ImageSourcePropTypes.js.
// We explicitly don't want this to be strict so that we can pass in objects
// that might have more keys. This also has to be inexact to support taking
// instances of classes like FBIcon.
// https://fburl.com/8lynhvtw
export type ImageURISource = $ReadOnly<{
  /**
   * `uri` is a string representing the resource identifier for the image, which
   * could be an http address, a local file path, or the name of a static image
   * resource (which should be wrapped in the `require('./path/to/image.png')`
   * function).
   */
  uri?: ?string,
  /**
   * `bundle` is the iOS asset bundle which the image is included in. This
   * will default to [NSBundle mainBundle] if not set.
   * @platform ios
   */
  bundle?: ?string,
  /**
   * `method` is the HTTP Method to use. Defaults to GET if not specified.
   */
  method?: ?string,
  /**
   * `headers` is an object representing the HTTP headers to send along with the
   * request for a remote image.
   */
  headers?: ?Object,
  /**
   * `body` is the HTTP body to send with the request. This must be a valid
   * UTF-8 string, and will be sent exactly as specified, with no
   * additional encoding (e.g. URL-escaping or base64) applied.
   */
  body?: ?string,
  /**
   * `cache` determines how the requests handles potentially cached
   * responses.
   *
   * - `default`: Use the native platforms default strategy. `useProtocolCachePolicy` on iOS.
   *
   * - `reload`: The data for the URL will be loaded from the originating source.
   * No existing cache data should be used to satisfy a URL load request.
   *
   * - `force-cache`: The existing cached data will be used to satisfy the request,
   * regardless of its age or expiration date. If there is no existing data in the cache
   * corresponding the request, the data is loaded from the originating source.
   *
   * - `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of
   * its age or expiration date. If there is no existing data in the cache corresponding
   * to a URL load request, no attempt is made to load the data from the originating source,
   * and the load is considered to have failed.
   *
   * @platform ios
   */
  cache?: ?('default' | 'reload' | 'force-cache' | 'only-if-cached'),
  /**
   * `width` and `height` can be specified if known at build time, in which case
   * these will be used to set the default `<Image/>` component dimensions.
   */
  width?: ?number,
  height?: ?number,
  /**
   * `scale` is used to indicate the scale factor of the image. Defaults to 1.0 if
   * unspecified, meaning that one image pixel equates to one display point / DIP.
   */
  scale?: ?number,
  ...
}>;

// We have to export any because of an issue in Flow with objects that come from Relay:
// https://fburl.com/8ljo5tmr
// https://fb.facebook.com/groups/flow/permalink/1824103160971624/
export type ImageSource = ImageURISource | number | Array<ImageURISource>;