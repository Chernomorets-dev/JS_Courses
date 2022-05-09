let user = {

    firstName: 'Test',
    lastName: 'Automation',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.',
    phone: '+12163547758',
    postalCode: '35211',
    email: 'auto3@autotest.com',
    password: 'passwordtest',
    days: '1',
    months: '1',    
    years: '2000',
}

Feature('Store');



Scenario.todo ('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail('auto39@autotest.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.waitForPageLoad(); 
    myAccountPage.checkMyAccountPageIsVisible();
    myAccountPage.clickSignOutButton();  
});


Scenario ('test shopping', async ({I, homePage, authPage, myAccountPage, womanPage}) =>  {
    homePage.openStore();
    homePage.clickSignIn();
    authPage.fillCurrentUserForm(user);
    myAccountPage.waitForPageLoad(); 
    myAccountPage.checkMyAccountPageIsVisible();  
    myAccountPage.clickWomanButton();
    womanPage.waitForPageLoad();
    womanPage.clickDresses();
    womanPage.waitForPageLoad();
    womanPage.clickСasualDresses();
    womanPage.waitForPageLoad();
    womanPage.clickIconList();
    womanPage.waitForPageLoad();
    womanPage.clickOpenProduct();
    womanPage.waitForOurPrice();    
    womanPage.clickAddToCart();
    womanPage.waitForCartLoad();
    const a = await womanPage.getProductPrice();
    console.log (await womanPage.getProductPrice());
    womanPage.clickProceed();
    womanPage.waitForPageLoad();
    const b = await womanPage.getUnitPrice();
    const c = "$16.51"; 
    console.log (await womanPage.getUnitPrice());
    //console.log (a == b);  
    I.assertEqual(a, b);
    womanPage.clickProceedToCheck();
    womanPage.waitForPageLoad();
    womanPage.clickProceedToCheck2();
    womanPage.waitForPageLoad();
    womanPage.clickIagree();
    womanPage.waitForPageLoad();
    womanPage.clickProceedToCheck3();
    womanPage.waitForPageLoad();
    womanPage.clickHookPay();
    womanPage.waitForPageLoad();
    womanPage.clickConfirmOrder();

});