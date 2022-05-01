const { I } = inject();

module.exports = {
  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  сurrentUserEmailInput: {css: '#email'},
  сurrentUserPasswordInput: {css: '#passwd'},
  submitLoginButton: {css: '#SubmitLogin'},

  waitForPageLoad() {
    I.waitForVisible(this.newUserEmailInput);
  },
  
  fillNewUserEmail(email) {
    this.waitForPageLoad();
    I.fillField(this.newUserEmailInput, email);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  
  waitForPageLoad() {
    I.waitForVisible(this.сurrentUserEmailInput);

  },
  fillCurrentUserEmailInput(email) {
    this.waitForPageLoad();
    I.fillField(this.сurrentUserEmailInput, email);
  },
  
  fillCurrentUserForm(user) {
    this.waitForPageLoad();
    I.fillField(this.сurrentUserEmailInput, user.email);
    I.fillField (this.сurrentUserPasswordInput, user.password);
    I.click(this.submitLoginButton);



  },

}