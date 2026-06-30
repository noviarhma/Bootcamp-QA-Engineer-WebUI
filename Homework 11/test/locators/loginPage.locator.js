import { By } from 'selenium-webdriver';

// Locators for SauceDemo login page
const LOGIN_LOCATORS = {
    url: 'https://www.saucedemo.com/',
    selectors: {
        usernameInput: By.id('user-name'),
        passwordInput: By.id('password'),
        loginButton: By.id('login-button'),
        errorMessage: By.css('[data-test="error"]'),
        title: By.css('.title')
    }
};

export default LOGIN_LOCATORS;