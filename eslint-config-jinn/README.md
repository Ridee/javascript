# eslint-config-jinn

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Jinn JavaScript style guide


## Installation

```
$ npm install --save-dev eslint eslint-config-jinn
```


## Usage

Once the `eslint-config-jinn` package is installed, you can use it by specifying `jinn` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "jinn",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `jinn` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that Google style is not opinionated about that you might want to enforce in your project.

To use Google style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `google` last:

```js
{
  "extends": ["eslint:recommended", "google"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

Apache-2 © Jinn
