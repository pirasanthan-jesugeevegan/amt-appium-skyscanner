class Onboarding {
  // Policy Screen
  get image () { return $('//android.widget.ImageView[@resource-id="net.skyscanner.android.main:id/privacy_policy_lottie_view"]'); }
  get titlePolicy () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/title"]'); }
  get policyDescription () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/privacy_policy_disclaimer"]'); }
  get policyDisclaimer () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/privacy_policy_cookie_policy_disclaimer"]'); }
  get accept () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/privacy_policy_accept_button"]'); }
  get manageSettings () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/privacy_policy_manage_settings_button"]'); }
  // Main Login Screen
  get titleLogin () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/login_selection_title"]'); }
  get subTitle () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/login_selection_subtitle"]'); }
  get email () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/login_selection_email_button"]'); }
  get google () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/login_selection_google_button"]'); }
  get facebook () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/login_selection_facebook_button"]'); }
  get later () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/login_selection_skip_button"]'); }

  policyElementVisiable () {
    this.image.isDisplayed();
    this.titlePolicy.isDisplayed();
    this.policyDescription.isDisplayed();
    this.policyDisclaimer.isDisplayed();
    this.accept.isDisplayed();
    this.manageSettings.isDisplayed();
  }

  loginElementVisiable () {
    this.titleLogin.isDisplayed();
    this.subTitle.isDisplayed();
    this.email.isDisplayed();
    this.google.isDisplayed();
    this.facebook.isDisplayed();
    this.later.isDisplayed();
  }

  getDes () {
    const msg = this.policyDescription.getText();
    return msg;
  }

  getPolicyTitle () {
    const msg = this.titlePolicy.getText();
    return msg;
  }

  getDisclaimer () {
    const msg = this.policyDisclaimer.getText();
    return msg;
  }

  getLoginTitle () {
    const msg = this.titleLogin.getText();
    return msg;
  }

  getLoginSubTitle () {
    const msg = this.subTitle.getText();
    return msg;
  }

  OnboardingSession () {
    this.accept.click();
    this.later.click();
  }
}
export default new Onboarding();
