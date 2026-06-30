import LOGIN_LOCATORS from '../locators/loginPage.locator.js';
import { until } from 'selenium-webdriver';
import ENV from '../../config/env.js';

class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    async open() {
        await this.driver.get(ENV.baseUrl);
    }

    async enterUsername(username) {
        const element = await this.driver.findElement(LOGIN_LOCATORS.selectors.usernameInput);
        await element.sendKeys(username);
    }

    async enterPassword(password) {
    const element = await this.driver.findElement(LOGIN_LOCATORS.selectors.passwordInput);
    await element.sendKeys(password);
    }

    async clickLoginButton() {
        const element = await this.driver.findElement(LOGIN_LOCATORS.selectors.loginButton);
        await element.click();
    }
    async getErrorMessage() {
    // Tunggu sampai elemen error muncul (max 5 detik)
    const element = await this.driver.wait(
      until.elementLocated(LOGIN_LOCATORS.selectors.errorMessage),
      50000,
      'Error message not found'
    );
    return await element.getText();
    }

    async getTitle() {
    const element = await this.driver.findElement(LOGIN_LOCATORS.selectors.title);
    return await element.getText();
    }

    async loginAsValidUser(username, password) {
    await this.open();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
    }
}

export default LoginPage;