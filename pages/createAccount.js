const { I } = inject();

module.exports = {
  genderSelect: { css: '#id_gender1' },
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  stateSelect: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  passwordInput: { css: '#passwd' },
  daysSelect: { css: '#days' },
  monthsSelect: { css: '#months' },
  yearsSelect: { css: '#years' },
  newsletterSelect: { css: '#newsletter' },
  optinSelect: { css: '#optin' },
  addressInput: { css: '#address1' },
  cityInput: { css: '#city' },
  phoneInput: { css: '#phone_mobile' },
  submitAccounttButton: { css: '#submitAccount' },
  
  
  
  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.click(this.genderSelect);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.fillField (this.passwordInput, user.password)
    I.selectOption(this.daysSelect, user.days);
    I.selectOption(this.monthsSelect, user.months);
    I.selectOption(this.yearsSelect, user.years);
    I.click(this.newsletterSelect); 
    I.click(this.optinSelect);
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.fillField(this.phoneInput, user.phone);
    I.click(this.submitAccounttButton);



  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}