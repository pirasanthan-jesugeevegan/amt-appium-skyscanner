const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = ['./test/specs/**/*.spec.js'];

// ============
// Capabilities
// ============
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'emulator-554',
    'appium:orientation': 'PORTRAIT',
    // The path to the app
    'appium:app': join(process.cwd(), './app/skyscanner.apk'),
    noReset: false,
    appWaitActivity: 'net.skyscanner*',
  },
];

exports.config = config;
