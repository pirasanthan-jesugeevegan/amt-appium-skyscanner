const { join } = require('path');
exports.config = {
    // ============
// Specs
// ============
specs = ['./test/specs/**/*.spec.js'];

// ============
// Capabilities
// ============
capabilities = [
  {
    // The defaults you need to have in your config
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'emulator-554',
    'appium:orientation': 'PORTRAIT',
    // The path to the app
    'appium:app': join(process.cwd(), './apps/skyscanner.apk'),
  },
];
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  sync: true,
  logLevel: 'silent',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['spec'],

  // ====================
  // Appium Configuration
  // ====================
  services: [
    [
      'appium',
      {
        args: {},
        command: 'appium',
      },
    ],
  ],
  port: 4723,
};