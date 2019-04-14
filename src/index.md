---
layout: home
---

## What's this?

A community of sites around a common topic, also known as a [webring](https://en.wikipedia.org/wiki/Webring). Kids in the 90s used to do it.

## How to join

To join the webring, [open a pull request]({{ meta.repo }}/compare) and supply the name and URL of your site. If you publish a RSS feed, you can provide that as well.

If you don't have a Github account, you can also use this form to sign up:

{% include 'signupform.njk' %}

The webring admins will then look at your site and determine if it's a good fit.

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

