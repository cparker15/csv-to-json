CSV to JSON
===========

This converter is written entirely in JavaScript and runs completely in the browser. Once the page finishes loading, there are no subsequent calls to the server. Because of this, there’s no risk of [data breach][wikipedia-data-breach]. Other converters written in server-side languages, which usually submit input and output text using plain HTTP instead of [HTTPS][wikipedia-https], transmitting your data [in the clear as plain, unencrypted text][wikipedia-plaintext], expose you and your data to unnecessary risk. While these server-side converters are good exercises in programming, and may be useful in a trusted [intranet][wikipedia-intranet] setting, they should not be used if they are hosted by [untrusted][wikipedia-untrusted] third parties on the unsecured Web.

Note
----

This converter is a UI -- a shell -- that wraps two external, independent libraries:

* [Christopher Parker][github-cparker15]'s [CSV JavaScript library][github-csv-js]
* [Douglas Crockford][github-douglascrockford]’s public domain [JSON JavaScript library][github-json-js]

Please only file bug reports or feature requests pertaining to the converter itself (the user interface) on this repo's issue tracker.

If you have something to report regarding the functionality of the CSV parser itself, please use the [CSV-js repo's issue tracker][github-csv-js-issues].

Building
--------

Prerequisites:

* [Node][nodejs] + [NPM][npmjs]
* [Bower][bower]
* [Grunt CLI][gruntjs]

After cloning this repo, here's how to build:

    $ npm install
    $ grunt

This will download and build all dependencies, then lint and minify the converter's code and all of its dependencies.

The final distributable converter resides at `dist/index.html`.

[wikipedia-data-breach]: http://en.wikipedia.org/wiki/Data_breach
[wikipedia-https]: http://en.wikipedia.org/wiki/HTTP_Secure
[wikipedia-plaintext]: http://en.wikipedia.org/wiki/Plaintext
[wikipedia-intranet]: http://en.wikipedia.org/wiki/Intranet
[wikipedia-untrusted]: http://en.wikipedia.org/wiki/Untrusted
[github-cparker15]: https://github.com/cparker15
[github-csv-js]: https://github.com/cparker15/CSV-js
[github-csv-js-issues]: https://github.com/cparker15/CSV-js/issues
[github-douglascrockford]: https://github.com/douglascrockford
[github-json-js]: https://github.com/douglascrockford/JSON-js
