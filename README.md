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

Need `css-loader` in your webpack config file.

Example

```json
{
  "test": /\.css$/,
  "use": [
    "style-loader",
    {
      "loader": "css-loader",
      "options": {
        "modules": true
      }
    }
  ]
}
```

## Style Guide

To run styleguidist server locally:

```
npm run styleguide
```
