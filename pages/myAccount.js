const { I } = inject();

module.exports = {
  centerInput: {css: '#center_column'},
  signOutButton: ({xpath: '//*[@id="header"]/div[2]/div/div/nav/div[2]/a'}),
  womanButton: ({xpath: '//*[@id="block_top_menu"]/ul/li[1]/a'}),
  

  waitForPageLoad() {
    I.waitForVisible(this.centerInput);
  },
  checkMyAccountPageIsVisible(){
    I.see('My account');
  },
  clickSignOutButton() {
    I.click(this.signOutButton);
  },
  clickWomanButton() {
    I.click(this.womanButton);
  },
  
}
