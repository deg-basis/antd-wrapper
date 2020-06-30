### General usage

```jsx
import Menu from './index';
import MenuButton from '../MenuButton';
import IconWithLabel from '../IconWithLabel';
const handleRouteChange = () => {
  /* do something about route change */
};
const YourRoutingLibrary = ({ children }) => <>{children}</>;

<Menu logo={<div>LOGO</div>} onClick={handleRouteChange}>
  <MenuButton key="upload">
    <YourRoutingLibrary route="/upload">
      <IconWithLabel name="upload" label="Upload Index" />
    </YourRoutingLibrary>
  </MenuButton>

  <MenuButton key="search">
    <YourRoutingLibrary route="/search">
      <IconWithLabel name="search" label="Search Index" />
    </YourRoutingLibrary>
  </MenuButton>

  <MenuButton key="settings">
    <YourRoutingLibrary route="/settings">
      <IconWithLabel name="settings" label="Settings Index" />
    </YourRoutingLibrary>
  </MenuButton>
</Menu>;
```

### Using `react-router`

```jsx
import Menu from './index';
import MenuButton from '../MenuButton';
import IconWithLabel from '../IconWithLabel';
import { BrowserRouter, Link } from 'react-router-dom';
const handleRouteChange = () => {
  /* do something about route change */
};

<BrowserRouter>
  <Menu logo={<div>LOGO</div>} onClick={handleRouteChange}>
    <MenuButton key="upload">
      <Link to="/upload">
        <IconWithLabel name="upload" label="Upload Index" />
      </Link>
    </MenuButton>

    <MenuButton key="search">
      <Link to="/search">
        <IconWithLabel name="search" label="Search Index" />
      </Link>
    </MenuButton>

    <MenuButton key="settings">
      <Link to="/settings">
        <IconWithLabel name="settings" label="Settings Index" />
      </Link>
    </MenuButton>
  </Menu>
</BrowserRouter>;
```
