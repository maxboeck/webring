import { redirect, getNext } from './common/utils'

exports.handler = function(event, context, callback) {
    const { host } = event.headers
    const next = getNext(host)

    callback(null, redirect(next))
}
