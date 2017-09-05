# path-cwd

> Get a path in the cwd

Unlike the [`resolve-*`](https://github.com/sindresorhus/resolve-cwd) these modules allow resolution of non-module paths. 

## Install

```sh
npm install --save path-cwd
```

```sh
yarn add path-cwd
```

## Import

```js
// ES2015
import cwd from 'path-cwd'
```

```js
// CommonJS
var cwd = require('path-cwd')
```

## Usage

### `cwd([path]) : String`

Get a path in the cwd.

- __path__ {String} _(optional)_ path to get in the cwd

Returns a string.

## Example

```js
import cwd from 'path-cwd'

cwd('pineapple') //=> C:/User/Spongebob Squarepants/projects/bikini-bottom/pineapple
```

## See also

- [`path-homedir`](https://github.com/sdgluck/path-homedir)

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
