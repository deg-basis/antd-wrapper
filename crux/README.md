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

To use Crux in your local environment (not on a repo), firstly you need to build:

```
yarn build
```

And then, refer it from another project.

```
yarn add <path/to/crux>/dist
```

## Publishing

You can publish the package by the following command. Make sure you have built the project.

```
npm publish dist
```

Note that you need to login to GitHub packages. (See _Login to GitHub Packages_ section of `../README.md`)
