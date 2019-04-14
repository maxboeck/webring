# Webring Starter Kit

A boilerplate to host your own community of sites, also known as a [webring]().  
Inspired by this post from [Charlie Owen](https://www.sonniesedge.net/posts/webrings)

Uses [Eleventy](https://www.11ty.io) and [Netlify](https://www.netlify.com/) to build a central directory for member sites.
People can link to `/prev`, `/random` and `/next` and be redirected to members of the ring.

[Example Site](https://webrings.netlify.com)

## How to host a ring

1. Fork this repo
2. Edit `src/data/meta.json` and fill in your community info
3. Remove the demo members in `src/data/members.json`
4. [Deploy your site to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/webring)
5. After you've set a domain, enter that in `meta.json` as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/webring)