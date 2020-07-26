# crux

Components for Rosette User eXperience

## How to Use

### Using with create-react-app project

#### Configure How to Load CSS of antd

You need to load an antd's Less file by yourself.

Create a Less file with the following content.
```
@import '~antd/dist/antd.less';
```

And then, load it from a `.ts` or `.tsx` file.
```
import './App.less';
```

Or use `craco` for optimized load.

https://github.com/DocSpring/craco-antd

#### Use Crux

Install Crux

```shell
yarn add antd-wrapper
```

Import Crux

```javascript
import { Icon } from 'antd-wrapper';
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
