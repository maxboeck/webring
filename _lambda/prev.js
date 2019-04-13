import { redirect, getPrevious, getRandom } from './common/utils'

exports.handler = function(event, context, callback) {
    const { referer } = event.headers
    const site = getPrevious(referer) || getRandom()

    callback(null, redirect(site))
}
