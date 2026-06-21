//import driver and module
import {Builder, By, until} from 'selenium-webdriver';
import assert from 'assert';
import { expect } from 'chai';

describe('Google Search Test', function() {
    let driver;

     //Hook Open website url
    before(async function () {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://www.saucedemo.com/');
    })

    //Hook close browser
    after(async function () {
        await driver.quit();
    })

    it('Visit SauceDemo dan cek page title', async function () {
        //Login form
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.xpath('//*[@id="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys('standard_user')
        await inputPassword.sendKeys('secret_sauce')
        await buttonLogin.click()

        //Validasi
        const buttonChart = await driver.findElement(By.className('shopping_cart_container'))
        const isDisplayed = await buttonChart.isDisplayed();

        expect(isDisplayed).to.be.true;

        await driver.sleep(1700);
    });

    it('Sorting Data Desc', async function () {
        //Filter Sorting Data
        let dropdownSort = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select'))
        await dropdownSort.click()
        let optionFilter = await driver.findElement(By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]'))
        await optionFilter.click();

        await driver.sleep(1700);
    });
});