---
layout: home
---

## What's this?

## How to join

To add a new site to the webring, [open a pull request]({{ meta.repo }}/compare) and supply the following information:

* Name of your site
* URL of your site
* URL of your RSS feed (optional)

The webring admins will then look at your site and determine if it will be included.

## Add the Snippet

```html 
<a href="{{ meta.url }}/prev">Previous</a>
<a href="{{ meta.url }}/random">Random</a>
<a href="{{ meta.url }}/next">Next</a>
```

## Want to host your own webring?

If you want to start your own webring, here's how to do it:

1. [Fork this Project](https://github.com/maxboeck/webring) on Github
2. Fill in your webring's name and description, and add a code of conduct.
3. [Deploy it to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/webring)
4. Edit the metadata and provide your Netlify Domain and the repository's URL.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/maxboeck/webring)

