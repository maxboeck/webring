# Webring Starter Kit

A boilerplate to host your own community of sites, also known as a [webring](https://en.wikipedia.org/wiki/Webring).  
Inspired by this post from [Charlie Owen](https://www.sonniesedge.net/posts/webrings).

Uses [Eleventy](https://www.11ty.io) and [Netlify](https://www.netlify.com/) to build a central directory for member sites. People can link to `/prev`, `/random` and `/next` and be redirected to members of the ring.

See the [Demo Site](https://webringdemo.netlify.com)

* Admins manage the ring on Github
* Let people add their site through pull request or submit via Netlify Form
* Publish a Code of Conduct
* Provide an embed code that renders a badge (as a web component)
* Publish an index of all member RSS feeds

## How to host a ring

1. Fork this repo
2. Edit `src/data/meta.json` and fill in your community info
3. Add an avatar image for your ring to `src/assets/images`
4. Remove the demo members in `src/data/members.json`
5. Deploy your site to Netlify
6. After you've set a domain, enter that in `meta.json` as well.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/webring)