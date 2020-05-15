// Link the given app's Crux dependency to this Crux.
// Also setup links to react and react-dom to avoid a multiple React instance problem.
// https://github.com/facebook/react/issues/14257

const path = require('path');
const { execSync } = require('child_process');

const script = path.basename(process.argv[1]);

if (process.argv.length !== 3) {
  console.log(`Usage: node ${script} <app-dir>`);
  process.exit(1);
}

const cruxDir = path.basename(__dirname);
const appDir = process.argv[2];
const nodeModulesDir = path.resolve(appDir, 'node_modules');

console.log('crux: yarn link');
execSync('yarn link', {
  cwd: cruxDir,
});

console.log('react: yarn link');
execSync('yarn link', {
  cwd: path.resolve(nodeModulesDir, 'react'),
});

console.log('react-dom: yarn link');
execSync('yarn link', {
  cwd: path.resolve(nodeModulesDir, 'react-dom'),
});

console.log('app: yarn link @basistechnology/crux');
execSync('yarn link @basistechnology/crux', {
  cwd: appDir,
});

console.log('crux: yarn link react');
execSync('yarn link react', {
  cwd: cruxDir,
});

console.log('crux: yarn link');
execSync('yarn link react-dom', {
  cwd: cruxDir,
});
