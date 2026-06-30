import { Builder } from 'selenium-webdriver';
import { expect } from 'chai';
import LoginPage from '../pages/loginPage.js';
import ShoppingCart from '../pages/shoppingCart.js';
import fs from 'fs';
import VisualRegressionHelper from '../utilities/VisualRegressionHelper.js';


describe('Login & add to Cart Test', function () {
  let driver;
  let loginPage;
  let shoppingCart;
  let visualHelper;

beforeEach(async () => {
  driver = await new Builder().forBrowser('chrome').build();
  loginPage = new LoginPage(driver);
  visualHelper = new VisualRegressionHelper();
});

afterEach(async () => {
  if (driver) {
    await driver.quit();
  }
});

  const TEST_USER = {
    valid: {
      username: 'standard_user',
      password: 'secret_sauce'
    },
    invalid: {
      username: 'invalid_user',
      password: 'secret_sauce'
    }
  };

  it('User Successfully Login', async () => {
    await loginPage.open();
    await loginPage.enterUsername(TEST_USER.valid.username);
    await loginPage.enterPassword(TEST_USER.valid.password);
    await loginPage.clickLoginButton();

    // Validasi login berhasil dengan cek title halaman
    const title = await loginPage.getTitle();
    expect(title).to.equal('Products');

    // ambil screenshot
    const screenshot = await driver.takeScreenshot();
    const filename = 'login-page.png';
    fs.writeFileSync(visualHelper.getCurrentPath(filename), screenshot, 'base64')
  });

  it('User can add product to cart', async () => {
  await loginPage.loginAsValidUser(TEST_USER.valid.username, TEST_USER.valid.password);

  const shoppingCart = new ShoppingCart(driver);
  await shoppingCart.addToCart();

  const cartCount = await shoppingCart.getCartBadgeCount();
  expect(cartCount).to.equal('1');

  // ambil screenshot
    const screenshot = await driver.takeScreenshot();
    const filename = 'add-to-chart.png';
    fs.writeFileSync(visualHelper.getCurrentPath(filename), screenshot, 'base64')
  });

  it('User Failed Login', async () => {
    await loginPage.open();
    await loginPage.enterUsername(TEST_USER.invalid.username);
    await loginPage.enterPassword(TEST_USER.invalid.password);
    await loginPage.clickLoginButton();

    // Validasi login gagal dengan cek pesan error
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).to.equal(
      'Epic sadface: Username and password do not match any user in this service'
    );

    // ambil screenshot
    const screenshot = await driver.takeScreenshot();
    const filename = 'failed-login.png';
    fs.writeFileSync(visualHelper.getCurrentPath(filename), screenshot, 'base64')
  });
});