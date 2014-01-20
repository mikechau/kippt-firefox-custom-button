# Kippt-Firefox-Custom-Button
---

This takes the Kippt [bookmarklet](https://kippt.com/extras/) and adjusts it
to work for the Firefox extension [Custom Buttons](https://addons.mozilla.org/en-US/firefox/addon/custom-buttons/).

The unminified source code is provided in `main.js` and the minified source code is in `main.min.js`.

This was created because I couldn't get the bookmarklet to work properly with Custom Buttons via `loadURI` when [NoScript](http://noscript.net/) was enabled.

A few minor changes were made, such as using `window.content.location.href` to get the page `URL` and `content.getSelection()` to get any highlighted text. `main.js` has relevant Stackoverflow links for more details.

---

## NoScript
You may need to add `^@chrome:` to your Anti-XSS whitelist.