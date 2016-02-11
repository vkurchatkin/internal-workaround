#!/usr/bin/env node

'use strict';

const minimist = require('minimist');
const installWorkaround = require('./index.js');

const printUsage = () =>
  console.log(`
usage: internal-workaround \`dirpath\`

  Installs workaround in \`dirpath\`.
`);

const argv = minimist(process.argv.slice(2), {
  alias: { h: 'help' }
});

if (argv.help) {
  printUsage();
  return;
}

const args = argv._.slice();

if (args.length !== 1) {
  printUsage();
  process.exit(-1);
}

const workaroundPath = args[0];

installWorkaround(workaroundPath);

console.log('\nWorkaround successfully installed.\n');
