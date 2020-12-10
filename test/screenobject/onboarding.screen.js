class Onboarding {
  // Policy Screen
  get image () { return $('//android.widget.ImageView[@resource-id="net.skyscanner.android.main:id/privacy_policy_lottie_view"]'); }
  get titlePolicy () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/title"]'); }
  get policyDescription () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/privacy_policy_disclaimer"]'); }
  get policyDisclaimer () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/privacy_policy_cookie_policy_disclaimer"]'); }
  get accept () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/privacy_policy_accept_button"]'); }
  get manageSettings () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/privacy_policy_manage_settings_button"]'); }
  get backButton () { return $('//android.widget.ImageButton[@elementId="821216c5-9fec-4164-992b-2b59154308e2"]'); }
  get optimizationSwitch () { return $('//android.widget.Switch[@resource-id="net.skyscanner.android.main:id/optimization_switch"]'); }
  get adsSwitch () { return $('//android.widget.Switch[@resource-id="net.skyscanner.android.main:id/personalized_ads_switch"]'); }
  get saveSettingButton () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/save_settings_button"]'); }
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

  OnboardingSession () {
    this.accept.click();
    this.later.click();
  }
}
export default new Onboarding();
