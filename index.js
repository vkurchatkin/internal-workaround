'use strict';

const mkdirp = require('mkdirp');
const path = require('path');
const fs = require('fs');

const natives = process.binding('natives');
const nativesKeys = Object.keys(natives);
const internalNativesKeys = nativesKeys.filter(key => key.startsWith('internal/'));

module.exports = rootPath => {
  const resolvedRootPath = path.resolve(rootPath);
  internalNativesKeys.forEach(key => {
    const fullPath = path.join(resolvedRootPath, 'node_modules', key + '.js');
    const fullDirPath = path.dirname(fullPath);
    mkdirp.sync(fullDirPath);
    fs.writeFileSync(fullPath, natives[key]);
  });
};
