# eslint-config-ozum

Highly opinionated ESLint plugin for various TypeScript projects.

# Usage

```sh
npm install -D eslint eslint-config-ozum
```

**.eslintrc.cjs**

```js
module.exports = {
  root: true,
  extends: ["ozum"], // or ["ozum/minimum"] or ["ozum/maximum"]
};
```

# Suggestions

- For `push` and `CI`, prefer to use `ozum/maximum`
- For development use any configuration.

**.eslintrc.cjs**
```
module.exports = {
  root: true,
  extends: ["ozum"],
};
```

**.eslintrc-maximum.cjs**
```
module.exports = {
  root: true,
  extends: ["ozum/maximum"],
};
```

| When | Config | Where | Example |
| ---- | ------ | ----|---|
|Development|`ozum`|`package.json`|`lint: "eslint --ignore-path .gitignore --cache --max-warnings 0 --ext js,jsx,ts,tsx,vue --fix ."`|
|Push|`ozum/maximum`|`.lint-staged.config.js`|`"*.{jsx,tsx,vue,js,ts}": ["eslint --no-ignore --cache --max-warnings 0 --fix --no-eslintrc -c ./.eslintrc-maximum.cjs"],`|
|CI|`ozum/maximum`|`.github/workflows/build.yml`|`pnpm lint --no-fix --no-eslintrc -c ./.eslintrc-maximum.cjs`|

# Configurations

| Name           | Parser Service | Description                                     |
| -------------- | -------------- | ----------------------------------------------- |
| `ozum/minimum` | ✗              | Non-type-checked rules and basic import rules.  |
| `ozum`         | ✔             | Type checked rules.                             |
| `ozum/maximum` | ✔             | Type checked rules and additional import rules. |

# Plugins & Configs

- TypeScript
- Airbnb Base Typescript
- Jest
- Promise
- Unicorn
