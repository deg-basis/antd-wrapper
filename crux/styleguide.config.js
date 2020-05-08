const propFilter = prop => {
  // exclude HTML attributes
  if (prop.parent) {
    return !prop.parent.fileName.includes('node_modules');
  }

  return true;
};

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
    propFilter,
  }).parse,
};
