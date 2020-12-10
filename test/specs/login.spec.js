import { expect } from 'chai';
import Onboarding from '../screenobject/onboarding.screen';
import Login from '../screenobject/login.screen';
import { getText } from '../helpers/utils';
const data = require('../../data/user');

describe('Login Function', () => {
  beforeEach(() => {
    driver.reset();
    Onboarding.accept.click();
    Onboarding.email.click();
  });

  it('TC01 - Verify that the login screen contains necessary elements', () => {
    Login.emailElementVisiable();
    expect(Login.nextButton.isEnabled()).equal(false);
    Login.emailInput.setValue(data.validUser.email);
    expect(Login.nextButton.isEnabled()).equal(true);
    Login.nextButton.click();
    Login.singInElementVisiable();
    expect(Login.signInButton.isEnabled()).equal(false);
    Login.email.isEqual(data.validUser.email);
    Login.passwordInput.setValue(data.validUser.password);
    expect(Login.signInButton.isEnabled()).equal(true);
  });

  it('TC02 - Verify that the user can login with valid creds', () => {
    Login.emailInput.setValue(data.validUser.email);
    Login.nextButton.click();
    Login.email.isEqual(data.validUser.email);
    Login.passwordInput.setValue(data.validUser.password);
    Login.signInButton.click();
    expect(getText(Login.loginSucessfulyText)).equal('You signed in');
  });

  it('TC03 - Verify if a user cannot login with a valid email and an invalid password.', () => {
    Login.emailInput.setValue(data.validUser.email);
    Login.nextButton.click();
    Login.passwordInput.setValue(data.invalidUser.password);
    Login.signInButton.click();
    Login.error();
  });

  it('TC04 - Verify if a user cannot login with a invalid email and an valid password.', () => {
    Login.emailElementVisiable();
    expect(Login.nextButton.isEnabled()).equal(false);
    Login.emailInput.setValue('test123');
    expect(Login.nextButton.isEnabled()).equal(false);
  });
});
