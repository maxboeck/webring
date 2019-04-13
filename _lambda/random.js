import { redirect, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    const random = getRandom(referer)

    callback(null, redirect(random))
}
