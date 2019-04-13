import { redirect, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { host } = event.headers
    const random = getRandom(host)

    callback(null, redirect(random))
}
