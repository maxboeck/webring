import { redirect, getPrevious } from './common/utils'

exports.handler = function(event, context, callback) {
    const { host } = event.headers
    const prev = getPrevious(host)

    callback(null, redirect(prev))
}
