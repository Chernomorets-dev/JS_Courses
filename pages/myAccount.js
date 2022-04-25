Feature('MyAccount');

Scenario('test text', ({ I }) => {
    I.amOnPage('http://automationpractice.com/index.php?controller=my-account');
    I.see('Welcome to your account. Here you can manage all of your personal information and orders.');
    //I.waitForVisible(locator);
});