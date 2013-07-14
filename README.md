CSV to JSON
===========

This converter is written entirely in JavaScript and runs completely in the browser. Once the page finishes loading, there are no subsequent calls to the server. Because of this, there’s no risk of [data breach][wikipedia-data-breach]. Other converters written in server-side languages, which usually submit input and output text using plain HTTP instead of [HTTPS][wikipedia-https], transmitting your data [in the clear as plain, unencrypted text][wikipedia-plaintext], expose you and your data to unnecessary risk. While these server-side converters are good exercises in programming, and may be useful in a trusted [intranet][wikipedia-intranet] setting, they should not be used if they are hosted by [untrusted][wikipedia-untrusted] third parties on the unsecured Web.

Conversion of the CSV input text to JavaScript objects is handled by [Christopher Parker][github-cparker15]'s [CSV JavaScript library][github-csv-js]. Conversion of the JavaScript objects to JSON output text is handled by [Douglas Crockford][github-douglascrockford]’s public domain [JSON JavaScript library][github-json-js].

Important Note
--------------

This repository includes [Douglas Crockford][github-douglascrockford]'s [JSON JavaScript library][github-json-js] as Git submodules. When cloning this repository, you must issue all of the following commands to pull in the libraries, too:

    $ git clone git@github.com:cparker15/csv-to-json.git
    $ cd csv-to-json
    $ git submodule init
    $ git submodule update

[wikipedia-data-breach]: http://en.wikipedia.org/wiki/Data_breach
[wikipedia-https]: http://en.wikipedia.org/wiki/HTTP_Secure
[wikipedia-plaintext]: http://en.wikipedia.org/wiki/Plaintext
[wikipedia-intranet]: http://en.wikipedia.org/wiki/Intranet
[wikipedia-untrusted]: http://en.wikipedia.org/wiki/Untrusted
[github-cparker15]: https://github.com/cparker15
[github-csv-js]: https://github.com/cparker15/CSV-js
[github-douglascrockford]: https://github.com/douglascrockford
[github-json-js]: https://github.com/douglascrockford/JSON-js