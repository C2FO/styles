# ui-guide
Code for creating frontend user interfaces.

## Usage

Currently this code is not ready on its own. We need to do
more work to fully build out all the parts we need to build
our interfaces.

Each of the pages found at the [documentation site][doc-site]
should show how and when to use various parts of the ui-guide.

## Development

When developing you need to run the following steps:

1. `npm install`
2. `grunt`
2. `python -m SimpleHTTPServer 9004` (site is now running at http://localhost:9004/)
3. Save files as you chage them
4. New output should be in the build directly after each save
5. Merge your changes to the `gh-pages` branch after you merge to `master`, add the build directly to the gh-pages branch

The current guide used for development is the following:

1. Follow [BEM][bem-naming] for CSS naming
  * less variables do not follow BEM, they are not CSS
  * Naming should allows be `block` => `element` => `modifier` (e.g. `person__hand--left-hand`)
2. The `index.less` file combines all less files together
3. The `mixins` directory is _only_ for true mixins
4. Follow the http://cssguidelin.es/ when writing code, see existing code for examples
5. _Always_ add at least one example of your change to the example pages
6. Make your contribution work for RTL styles

## TODO

Overall project thigns to do are in a gist that can be found here:

https://gist.github.com/garrypolley/5c8d29df98cd3c1261cd

Things to cleanup as this project grows:

* Add consumer docs for existing parts
  * Grid
  * `#site-container`
* Add developer docs (code docs may be good enough when used with the consumer docs)
* Have a legit site that isn't hard coded HTML pages
* Have local development site that is also legit
* Add sub navigation for pages like typography and colors
* Automate the `gh-pages` bits when making the development site legit


[doc-site]: http://c2fo.github.io/ui-guide/
[bem-naming]: http://getbem.com/naming/
