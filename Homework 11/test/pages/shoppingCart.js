import SHOPPING_CART_LOCATORS from '../locators/shoppingCart.locator.js';

class ShoppingCart {
  constructor(driver) {
    this.driver = driver;
  }

  async addToCart() {
    const element = await this.driver.findElement(SHOPPING_CART_LOCATORS.addToCartButton);
    await element.click();
  }

  async getCartBadgeCount() {
    const element = await this.driver.findElement(SHOPPING_CART_LOCATORS.cartBadge);
    return await element.getText();
  }
}

export default ShoppingCart;
