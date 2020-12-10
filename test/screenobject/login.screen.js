class Login {
  // email screen
  get emailTitle () { return $('//android.widget.ImageView[@resource-id="net.skyscanner.android.main:id/email_lookup_title"]'); }
  get emailInput () { return $('//android.widget.EditText[@resource-id="net.skyscanner.android.main:id/email_lookup_edit_text"]'); }
  get nextButton () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/next_button"]'); }
  // sign in screen
  get backButton () { return $('//android.widget.ImageButton[@elementId="94f8ea15-5cd3-4b24-beca-bba1483110be"]'); }
  get yourBackText () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/signin_signup_title"]'); }
  get passwordText () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/signin_signup_subtitle"]'); }
  get email () { return $('//android.widget.EditText[@resource-id="net.skyscanner.android.main:id/email_signin_signup_edittext"]'); }
  get tickIcon () { return $('//android.widget.ImageButton[@resource-id="net.skyscanner.android.main:id/signin_signup_email_icon"]'); }
  get passwordInput () { return $('//android.widget.EditText[@resource-id="net.skyscanner.android.main:id/password_edittext"]'); }
  get passwordIcon () { return $('//android.widget.ImageButton[@resource-id="net.skyscanner.android.main:id/password_icon"]'); }
  get forgotPassword () { return $('//android.widget.ImageButton[@resource-id="net.skyscanner.android.main:id/forgot_password_button"]'); }
  get signInButton () { return $('//android.widget.Button[@resource-id="net.skyscanner.android.main:id/next_button"]'); }
  get loginSucessfulyText () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/login_finished_title"]'); }
  get errorIcon () { return $('//android.widget.ImageView[@resource-id="net.skyscanner.android.main:id/login_error_image_view"]'); }
  get errorMessage () { return $('//android.widget.TextView[@resource-id="net.skyscanner.android.main:id/login_error_title"]'); }

  emailElementVisiable () {
    this.emailTitle.isDisplayed();
    this.emailInput.isDisplayed();
    this.nextButton.isDisplayed();
  }

  singInElementVisiable () {
    this.backButton.isDisplayed();
    this.yourBackText.isDisplayed();
    this.passwordText.isDisplayed();
    this.email.isDisplayed();
    this.tickIcon.isDisplayed();
    this.passwordInput.isDisplayed();
    this.passwordIcon.isDisplayed();
    this.forgotPassword.isDisplayed();
    this.signInButton.isDisplayed();
  }

  error () {
    this.errorIcon.isDisplayed();
    const msg = this.errorMessage.getText();
    return msg;
  }
}
export default new Login();
