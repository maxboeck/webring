// SPDX-License-Identifier: MIT

import { redirect, getRandom } from "./common/utils";

exports.handler = function(event, context, callback) {
  const { referer } = event.queryStringParameters;
  const site = getRandom(referer);

  callback(null, redirect(site));
};
