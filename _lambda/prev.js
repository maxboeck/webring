import { redirect, getPrevious, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    const prev = getPrevious(referer) || getRandom()

    callback(null, redirect(prev))
}
