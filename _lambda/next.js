import { redirect, getNext } from './common/utils'

exports.handler = function(event, context, callback) {
    const { host } = event.headers
    console.log(event.headers)
    const next = getNext(host)

    callback(null, redirect(next))
}
