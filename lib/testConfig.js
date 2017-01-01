// This file isn't transpiled

// Register Babel to transpile before tests run
require('babel-register');

// Disable webpack features that don't work with Mocha
require.extensions['.css'] = function () {};