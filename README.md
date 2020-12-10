<p align="center">
 <img src="https://journey.symphonyoflove.net/wp-content/uploads/2019/09/Skyscanner-new-Logo.png" />

 </p>
<h1 align="center">SkyScanner </h1>

This is a task to Automate the Skyscanner Native App using Appium and Webdriver, Please see below for the Test Case that are automated 

## **Test Scenario**:  Login Function 

| Test Case Number | Test Case |
|--|--|
|TC01| Verify that the login screen contains necessary elements |
|TC02| Verify that the user can login with valid creds|
|TC03| Verify if a user cannot login with a valid email and an invalid password |
|TC04| Verify if a user cannot login with a invalid email and an valid password |

## **Test Scenario**:  Onboarding Screen 

| Test Case Number | Test Case |
|--|--|
|TC01| Verify that the onboarding contains necessary elements |
|TC02| Verify that the Policy Screen contains necessary elements|
|TC03| Verify that the user can complete the onboard flow successfully |

Note - These are one of the few to be automated
## Install

1.  clone the repo
2.  `npm install` or 	`yarn install`

## Setting up
1. Configure your virtual device -  Go to `wdio.android.app.conf.js` file and fill in your device detail 
```
config.capabilities  =  [
  {
       // The defaults you need to have in your config
       platformName:  'Android',
       maxInstances:  1,
       'appium:deviceName':  '<DEVICE_NAME>',
       'appium:orientation':  '<ORIENTATION>',
       // The path to the app
       'appium:app':  join(process.cwd(),  '<APP_LOCATION>'),
       noReset:  false,
       appWaitActivity:  'net.skyscanner*',
   },
];
```
2. User login detail - Create a folder called `data` in the root folder, then create a `user.js` and add user details 
```
module.exports = {
  validUser: {
    email: '<EMAIL>',
    password: '<PASSWORD>',
  },
  invalidUser: {
    email: '<EMAIL>',
    password: '<PASSWORD>',
  },
};

```

## Run tests
**Android** - Run Locally on Android simulator

 
```
npm run android.app
```

## Technology used:

 - Appium
 - Webdriver
 - Mochawsome
