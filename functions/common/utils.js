import members from '../../src/data/members'

export const redirect = site => {
    const statusMessage = `redirecting to: ${site.url}`
    console.log(statusMessage)

    return {
        statusCode: 303,
        headers: { Location: site.url },
        body: statusMessage
    }
}

export const getIndex = url =>
    url ? members.findIndex(site => url.includes(site.url)) : -1

export const getNext = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const nextIndex = index < members.length - 1 ? index + 1 : 0
        return members[nextIndex]
    }
    console.log('referrer position not found.')
    return null
}

export const getPrevious = url => {
    const index = getIndex(url)
    if (index !== -1) {
        const prevIndex = index > 0 ? index - 1 : members.length - 1
        return members[prevIndex]
    }
    console.log('referrer position not found.')
    return null
}

export const getRandom = url => {
    const selection = url
        ? members.filter(site => !url.includes(site.url))
        : members
    const randomIndex = Math.floor(Math.random() * selection.length)
    return selection[randomIndex]
}
