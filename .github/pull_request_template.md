## Adding your site

To add a new site to the webring, please supply the following information:

* Name of your site.
* URL of your site.
* Host(s) for [`frame-ancestors` HTTP security directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).
  Without this, browsers will block the banner `<iframe>` on your site.
* URL of your RSS feed (optional).

Example:

```json
{
  "title": "G. Raymond's awesome site",
  "url": "https://raymond.example.com/",
  "frameAncestor": "raymond.example.com",
  "feed": null
}
```
