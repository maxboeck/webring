import meta from '../../src/data/meta'
import members from '../../src/data/members'

export const redirect = site => {
    const location = site && site.url ? site.url : meta.url
    return {
        statusCode: 302,
        headers: {
            Location: location,
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        },
        body: `Redirecting to "${site.title}"`
    }
}

export const getIndex = url => members.findIndex(site => site.url.includes(url))

export const getNext = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const nextIndex = index < members.length - 1 ? index + 1 : 0
        return members[nextIndex]
    }
    return null
}

export const getPrevious = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const prevIndex = index > 0 ? index - 1 : members.length - 1
        return members[prevIndex]
    }
    return null
}

export const getRandom = url => {
    const randomIndex = Math.floor(Math.random() * members.length)
    const filtered = members.filter(site => !site.url.includes(url))
    return filtered[randomIndex]
}
