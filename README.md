# crux

Components for Rosette User eXperience

## How to Use

### create-react-app user

Install libraries

```
npm install crux antd classnames
```

Import Crux

```
import { Icon } from 'crux';

```

Use Crux component

```
<Icon name="help" />
```

### Project without CSS Modules enabled

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

## Style Guide

To run styleguidist server locally:

```
npm run styleguide
```
