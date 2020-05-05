# `crux`/`usage-example`

A simple demo of `crux` components used in a webapp.

## Note on the `IconWithTooltipExample` and `UploadExample` components

These components are not exported by `crux` yet. Their examples have therefore been commented out in the demo.
Once these are exported by `crux`, they may be un-commented. (And updated if the components have changed.)

## Requirements

- `crux`: follow the instructions in the crux Readme to get access
- Node modules: run `SKIP_PREFLIGHT_CHECK=true yarn install` [1]

#### Note on `SKIP_PREFLIGHT_CHECK=true`:

Since the `crux` main project is located in the repo root, `usage-example` is a project in a project.
On `yarn start`, the demo therefore finds a conflicting version of `babel-loader` in the parent directory.

Setting `SKIP_PREFLIGHT_CHECK=true` allows us to run anyway, but it is probably not ideal.
This can be removed if the main project is moved to its own subdirectory (thus becoming a sibling of the demo, instead of its parent, and making the demo no longer a project-in-a-project).

## Running the project

Run `yarn start`.

The demo should become available at `localhost:3000` in your browser.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
