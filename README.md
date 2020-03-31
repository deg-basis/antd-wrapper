# crux

Components for Rosette User eXperience

## How to Use

### Using with create-react-app project

Create `.npmrc` file in your project root directory with the following content.

```
registry=https://npm.pkg.github.com/basistechnology
```

And then, login to GitHub Packages. (see _Login to Github Packages_ section)

Install Crux

```shell
yarn add @basistechnology/crux
```

You also need to install the peer dependencies `antd`, `classnames` and `react` if not installed yet.

```shell
yarn add antd classnames
```

Import Crux

```javascript
import { Icon } from '@basistechnology/crux';
```

Use Crux component

```jsx
<Icon name="help" />
```

### Project using webpack directory

In addition to the steps of the _Using with create-react-app project_ section, need to configure css-loader in your webpack config file to support CSS Modules on Crux.

Example:

```javascript
{
  test: /\.css$/,
  include: /node_modules\/crux/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
      },
    },
  ],
},
```

If you use Crux in a local directory, `include` should be like this.

```javascript
include: path.join(__dirname, '../crux/dist/'),
```

## Style Guide

To run styleguidist server locally:

```
yarn styleguide
```

## Development

To use Crux in your local environment (not on a repo), firstly you need to build:

```
yarn build
```

And then, refer it from another project.

```
yarn add <path/to/crux>
```

## Publishing

You can publish the package by the following command. Make sure you have built the project.

```
npm publish dist
```

## Login to Github Packages

Before managing or installing a package, you need to login to GitHub Packages. It is required to enter your GitHub authentication token as a password.

### Generating Personal Authentication Token

You can generate your token on GitHub (Settings|Developer settings|Personal access tokens). Required scope for the personal access token is shown in the below table.

For example, A Crux user needs `read:packages` and `read` permission for the Crux repository.

| Scope             | Repository permissions | Crux user | Crux developer | Crux admin |
| ----------------- | ---------------------- | --------- | -------------- | ---------- |
| `read:packages`   | read                   | ✓         | ✓              | ✓          |
| `write:packages`  | write                  |           | ✓              | ✓          |
| `delete:packages` | admin                  |           |                | ✓          |
| `repo`            |                        | ✓         | ✓              | ✓          |

### Run npm login

```
npm login --registry=https://npm.pkg.github.com/
Username: <username>
Password: <authentication token>
Email: <email>
```
