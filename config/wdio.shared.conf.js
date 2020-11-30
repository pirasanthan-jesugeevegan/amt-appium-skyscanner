exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    require: ['@babel/register'],
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
