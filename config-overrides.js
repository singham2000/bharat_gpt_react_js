const { override } = require('customize-cra');

module.exports = override(
  (config) => {
    // Disable CSS minimization
    config.optimization.minimize = false;
    return config;
  }
);