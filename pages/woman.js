const { I } = inject();

module.exports = {
  womanLink: 'http://automationpractice.com/index.php?id_category=3&controller=category',
  topsInput: ({xpath: '//*[@id="contact-link"]/a'}),
  dresses: ({xpath: '//*[@id="categories_block_left"]/div/ul/li[2]/a'}),
  сasualDresses: ({xpath: '//*[@id="categories_block_left"]/div/ul/li[1]/a'}),
  iconList:({xpath: '//*[@id="list"]'}),
  openProduct : ({xpath: '//*[@id="center_column"]/ul/li[1]/div/div/div[2]/h5/a'}),
  ourPrice: ({xpath: '//*[@id="our_price_display"]'}),
  addToCart : ({xpath: '//*[@id="add_to_cart"]/button/span'}),
  cartInput: ({xpath: '//*[@id="layer_cart"]/div[1]/div[1]'}),
  proceed: ({xpath: '//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a'}),
  productPrice : ({xpath: '//*[@id="our_price_display"]'}),
  unitPrice: ({xpath: '//*[@id="total_product"]'}),
  proceedToCheck: ({xpath: '//*[@id="center_column"]/p[2]/a[1]/span/text()'}),
  proceedToCheck2: ({xpath: '//*[@id="center_column"]/form/p/button'}),
  proceedToCheck3: ({xpath: '//*[@id="form"]/p/button'}),
  Iagree: ({xpath: '//*[@id="cgv"]'}),
  hookPay: ({xpath: '//*[@id="HOOK_PAYMENT"]/div[1]/div/p/a'}),
  confirmOrder: ({xpath: '//*[@id="cart_navigation"]/button'}),
  
  openStore() {
    I.amOnPage(this.womanLink);
  },
  
  waitForPageLoad() {
    I.waitForVisible(this.topsInput);
  },
  
  clickСasualDresses() {
    I.click(this.сasualDresses);
  },
 
  clickDresses() {
    I.click(this.dresses);
  },
  clickIconList() {
    I.click(this.iconList);
  },

  clickOpenProduct() {
    I.click(this.openProduct);
  },
  waitForOurPrice() {
    I.waitForVisible(this.ourPrice);
  },
  clickAddToCart() {
    I.click(this.addToCart);
  },
  waitForCartLoad() {
    I.waitForVisible(this.cartInput);
  },
  async getProductPrice() { 
    return await I.grabTextFrom(this.productPrice);
  }, 
  clickProceed() {
    I.click(this.proceed);
  },
  async getUnitPrice() {
    return await I.grabTextFrom(this.unitPrice);
  },
  clickProceedToCheck() {
    I.click("Proceed to checkout");
  },
  clickProceedToCheck2() {
    I.click(this.proceedToCheck2);
  },
  clickIagree() {
    I.click(this.Iagree);
    },
  clickProceedToCheck3() {
    I.click(this.proceedToCheck3);
  },
  clickHookPay() {
    I.click(this.hookPay);
  },
  clickConfirmOrder() {
    I.click("I confirm my order");
  },
}