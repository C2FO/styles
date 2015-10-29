# ui-guide
Code for creating frontend user interfaces.


## Usage

Currently this code is not ready on its own. We need to do
more work to fully build out all the parts we need to build
our interfaces.

Each of the pages found at the [documentation site][doc-site]
should show how and when to use various parts of the ui-guide.


## Development

### Prerequisites

* [homebrew][homebrew]
* [nodejs][nodejs]

### Setup

In order to develop within the ui-guide you'll need to run the
below commands. They install then node dependencies as well as
the needed libraries to run jekyll.

1. `npm install`
2. `grunt setup`

### Running

After you're initially setup all you need to have two windows open to run the site and get updates:

1. `grunt monitor`
2. `jekyll serve`

This does a few things:

* Runs the jekyll site
* Updates the output CSS as you work
* Updates the pages so you do not need to restart the server

The local site can be see at http://localhost:4000/ui-guide.

### Code Style

The current guide used for code development:

1. Follow [BEM][bem-naming] for CSS naming
  * less variables do not follow BEM, they are not CSS
  * Naming should allows be `block` => `element` => `modifier` (e.g. `person__hand--left-hand`)
2. The `index.less` file combines all less files together
3. The `mixins` directory is _only_ for true mixins
4. Follow the http://cssguidelin.es/ when writing code, see existing code for examples
5. _Always_ add at least one example of your change to the example pages
6. Make your contribution work for RTL styles


## TODO

Overall project things to do are in a gist that can be found here:

https://gist.github.com/garrypolley/5c8d29df98cd3c1261cd

Things to cleanup as this project grows:

* Add consumer docs for existing parts
  * Grid
  * `#site-container`
* Add developer docs (code docs may be good enough when used with the consumer docs)
* Add sub navigation for pages like typography and colors
* Automate the `gh-pages` bits when making the development site legit


[doc-site]: http://c2fo.github.io/ui-guide/
[bem-naming]: http://getbem.com/naming/
[homebrew]: http://brew.sh/
[nodejs]: https://nodejs.org/en/download/
