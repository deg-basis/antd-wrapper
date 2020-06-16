### General usage

```jsx
<Menu logo={Logo}>
  <YourRoutingLibrary route="/profile">
    <MenuButton icon={ProfileIcon}>Profile</MenuButton>
  </YourRoutingLibrary>

  <YourRoutingLibrary route="/search">
    <MenuButton icon={SearchIcon}>Search</MenuButton>
  </YourRoutingLibrary>

  <YourRoutingLibrary route="/settings">
    <MenuButton icon={SettingsIcon}>Settings</MenuButton>
  </YourRoutingLibrary>
</Menu>
```

### Using `react-router`

```jsx
<Menu logo={Logo}>
  <Link to="/profile">
    <MenuButton icon={ProfileIcon}>Profile</MenuButton>
  </Link>

  <Link to="/search">
    <MenuButton icon={SearchIcon}>Search</MenuButton>
  </Link>

  <Link to="/settings">
    <MenuButton icon={SettingsIcon}>Settings</MenuButton>
  </Link>
</Menu>
```
