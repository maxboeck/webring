import { redirect, getRandom } from '../common/utils'

const handler = async (event) => {
  try {
    const { referer } = event.headers
    const site = getRandom(referer)

    return redirect(site)
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
