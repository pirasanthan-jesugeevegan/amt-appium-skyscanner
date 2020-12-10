import { expect } from 'chai';
import Onboarding from '../screenobject/onboarding.screen';
import { getText } from '../helpers/utils';
describe('Onboarding', () => {
  it('TC1 - Verifiy that the onboarding contains necessary elements', () => {
    Onboarding.policyElementVisiable();
    expect(getText(Onboarding.titlePolicy)).equal('Your data. Your choice.');
    expect(getText(Onboarding.policyDescription)).equal('We collect information on how and when you use our app. This allows us, and our trusted third parties, to personalize what you see, improve your experience and show ads that are relevant to you.');
    expect(getText(Onboarding.policyDisclaimer)).equal('For more information, please read our Cookie Policy');
    Onboarding.accept.click();
    Onboarding.loginElementVisiable();
    expect(getText(Onboarding.titleLogin)).equal('Get the full experience');
    expect(getText(Onboarding.subTitle)).equal('Track prices, make trip planning easier, and enjoy faster booking.');
    Onboarding.later.click();
  });

  it('TC2 - Verfiy that the Policy Screen contains necessary elements', () => {
    driver.reset();
    Onboarding.policyElementVisiable();
    expect(getText(Onboarding.titlePolicy)).equal('Your data. Your choice.');
    expect(getText(Onboarding.policyDescription)).equal('We collect information on how and when you use our app. This allows us, and our trusted third parties, to personalize what you see, improve your experience and show ads that are relevant to you.');
    expect(getText(Onboarding.policyDisclaimer)).equal('For more information, please read our Cookie Policy');
    Onboarding.manageSettings.click();
    expect(Onboarding.optimizationSwitch.isSelected()).equal(false);
    expect(Onboarding.adsSwitch.isSelected()).equal(false);
    Onboarding.saveSettingButton.click();
    Onboarding.loginElementVisiable();
  });

  it('TC3 - Verfiy that the user can complate the onboard flow succesfully', () => {
    driver.reset();
    Onboarding.accept.click();
    Onboarding.later.click();
  });
});
