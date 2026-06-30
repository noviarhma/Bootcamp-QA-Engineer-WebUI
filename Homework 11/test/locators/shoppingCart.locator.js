import { By } from 'selenium-webdriver';

const SHOPPING_CART_LOCATORS = {
  addToCartButton: By.css('[data-test="add-to-cart-sauce-labs-backpack"]'),
  cartBadge: By.css('.shopping_cart_badge')
};

export default SHOPPING_CART_LOCATORS;
