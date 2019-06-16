// SPDX-License-Identifier: MIT

import { redirect, getNext, getRandom } from "./common/utils";

exports.handler = function(event, context, callback) {
  const { referer } = event.queryStringParameters;
  const site = getNext(referer) || getRandom();

  callback(null, redirect(site));
};
