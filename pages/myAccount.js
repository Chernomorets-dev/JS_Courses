const { I } = inject();

module.exports = {
  centerInput: {css: '#center_column'},
  SignOutButton: ({xpath: '//*[@id="header"]/div[2]/div/div/nav/div[2]/a'}),
  

  waitForPageLoad() {
    I.waitForVisible(this.centerInput);
  },
  checkMyAccountPageIsVisible(){
    I.see('My account');
  },
  clickSignOutButton() {
    I.click(this.SignOutButton);
  },

  
}
