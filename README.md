# crux

Components for Rosette User eXperience

## How to Use

### Using with create-react-app project

#### Configure Authentication to GitHub Packages

Create `.npmrc` file in your project root directory with the following content.

For yarn ([GitHub Packages issue](https://github.community/t5/Project-Development-Help-and/Consume-Github-Package-private-registry-with-yarn/td-p/43463))

```
@basistechnology:registry=https://npm.pkg.github.com
```

For npm

```
registry=https://npm.pkg.github.com/basistechnology
```

And then, login to GitHub Packages. (See _Login to Github Packages_ section)

#### Configure How to Load CSS of antd

You need to load antd's CSS by yourself.

Load whole CSS in your css.

```
@import '~antd/dist/antd.css';
```

Or use `craco` for optimized load.

https://github.com/DocSpring/craco-antd

#### Use Crux

Install Crux

```shell
yarn add @basistechnology/crux
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
yarn install
yarn styleguide
```

## Login to GitHub Packages

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

