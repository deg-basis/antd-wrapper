# crux

Components for Rosette User eXperience

## How to Use

### Using with create-react-app project

Install Crux (TBD)

Import Crux

```javascript
import { Icon } from 'crux';
```

Use Crux component

```jsx
<Icon name="help" />
```

### Project using webpack directory

Need to configure `css-loader` in your webpack config file to support CSS Modules on Crux.

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

Before publishing, you need to login to the GitHub repository. It is required to enter your GitHub authentication token as a password. You can generate your token on GitHub (Settings|Developer settings|Personal access tokens).

```
npm login --registry=https://npm.pkg.github.com/
Username: <username>
Password: <authentication token>
Email: <email>
```

And then, type the following command to publish.

```
npm publish
```
