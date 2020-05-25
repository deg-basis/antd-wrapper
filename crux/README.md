# `crux`/`crux`

Components for Rosette User eXperience

## Initial Setup

Firstly, you need `yarn install` to initialize the project.

```
yarn install
```

## Development

### Build

```
yarn build
```

This will generate and copy files to the `dist` directory.

## Style Guide

To run styleguidist server locally:

```
yarn styleguide
```

## Use Crux in Your Local Environment

To use Crux in your local environment (not on a repo), firstly, you need to build Crux and make a link to it.

```
yarn build
node scripts/link.js <path/to/app>
```

When you want to use the GitHub Packages version of Crux, re-install dependencies. `link.js` set up links. (See https://github.com/facebook/react/issues/14257#issuecomment-595183610)

Both in the app directory and the Crux directory:

```
rm -rf node_modules
yarn install
```

## Publishing

You can publish the package by the following command.

```
yarn publish --new-version <version>
```

Note that you need to login to GitHub packages. (See _Login to GitHub Packages_ section of `../README.md`)
