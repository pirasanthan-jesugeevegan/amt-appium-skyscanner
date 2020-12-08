import { expect } from 'chai';
import Onboarding from '../screenobject/onboarding.screen';
import TabBar from '../helpers/tab.bar';
import Login from '../screenobject/login.screen';
describe('Login', () => {
  it('Check Login element exisit', () => {
    Onboarding.OnboardingSession();
    TabBar.login();
    Onboarding.loginElementVisiable();
  });
  it('Login with valid email', () => {
    Onboarding.email.click();
    Login.emailElementVisiable();
    expect(Login.nextButton.isEnabled()).equal(false);

    Login.emailInput.setValue('test123@test.com');
    Login.nextButton.click();
    Login.singInElementVisiable();
    Login.email.isEqual('test123@test.com');
    Login.passwordInput.setValue('Test1234');
    Login.passwordInput.isEnabled('Test1234');
    Login.signInButton.click();
  });
});
