import { redirect, getNext, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    const next = getNext(referer) || getRandom()

    callback(null, redirect(next))
}
