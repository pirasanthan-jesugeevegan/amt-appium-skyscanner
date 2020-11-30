import { expect } from 'chai';
import Onboarding from '../screenobject/onboarding.screen';
describe('Onboarding', () => {
  it('Policy Screen', () => {
    Onboarding.policyElementVisiable();
    expect(Onboarding.getPolicyTitle()).equal('Your data. Your choice.');
    expect(Onboarding.getDes()).equal('We collect information on how and when you use our app. This allows us, and our trusted third parties, to personalize what you see, improve your experience and show ads that are relevant to you.');
    expect(Onboarding.getDisclaimer()).equal('For more information, please read our Cookie Policy');
    Onboarding.accept.click();
  });
  it('Login Screen', () => {
    Onboarding.loginElementVisiable();
    expect(Onboarding.getLoginTitle()).equal('Get the full experience');
    expect(Onboarding.getLoginSubTitle()).equal('Track prices, make trip planning easier, and enjoy faster booking.');
    Onboarding.later.click();
  });
});
