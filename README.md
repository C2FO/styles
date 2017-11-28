# @c2fo/styles
Shared css for frontend projects


## Usage

Currently this code is not ready on its own. We need to do
more work to fully build out all the parts we need to build
our interfaces.

Each of the pages found at the [documentation site][doc-site]
should show how and when to use various parts of the ui-guide.


## Development

#### Get these 🙌
* [homebrew][homebrew]
* [nodejs][nodejs]

#### Setup 🔧
- `npm install`
- `npm run setup`

### Running and watching 🏃👀
- `npm start`
- `npm run watch`

This does a few things:

* Runs a jekyll site with live reload
* Updates the css as you work

The local site can be see at http://localhost:4000/.

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

Updates to styles should all be in the `src/` folder.  Right now shared styles should be written in less, which we compile down to css for distribution.

### Building for Distribution
- `npm run dist`

This will build out the `dist/` folder which is used by consumers.  In addition, it builds out the preprecessor
variables files, as described in the next section.  Dist updates should be committed with each release as that is how the project is intended to be consumed.

### Variables
To make the guide more preprocessor-agnostic, we include `src/variables.yml` which contains a list
of the colors and measurements utilized in the main .less files.  This will create both `variables.less` and
`variables.scss` files in the `dist/` folder when calling the grunt command `grunt shared_config`.  This task is executed as part of the `npm run dist` command.  These variables should _rarely_ change, but if they do, it should be updated in both the variables file as well as whichever .less file the variable lives in (`colors.less`, `measurements.less`).

## Consuming

### Installation and Usage
npm: `npm install @c2fo/styles`
Yarn: `yarn add @c2fo/styles`

Consumption of the package will vary depending on framework of choice, but consumers are intended to use `c2fo-styles.min.css` and the appropriate `variables.less` or `variables.scss` located in the `dist/` folder.  It is _not_ intended for you to consume the `src/` folder directly.

#### Ember example (v2.16.x):
In ember-cli-build.js:
```js
let app = new EmberApp(options, { /*...*/ });
// ...
app.import('node_modules/@c2fo/styles/dist/c2fo-styles.min.css');
```
Now c2fo-styles.min.css is concatenated into `my-ember-app/dist/assets/vendor.css`.

Variables can be directly consumed in your `app.scss` by importing from a node_modules path:
```scss
@import 'node_modules/@c2fo/styles/dist/variables.scss';
```


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
