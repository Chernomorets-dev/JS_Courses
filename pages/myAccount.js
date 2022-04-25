const { I } = inject();

Feature('MyAccount');

Scenario('test text', ({ I }) => {
     I.see('Welcome to your account. Here you can manage all of your personal information and orders.');
    
});