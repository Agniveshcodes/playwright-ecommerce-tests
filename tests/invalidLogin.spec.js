import {test,expect} from '@playwright/test'

test('Login with invalid password' , async({page})=>{
    await page.goto('https://www.saucedemo.com')

    await page.fill('#user-name' , 'standard_user')
    await page.fill('#password' , 'wrong_Password')

    await page.click('#login-button')

    const errorMessage = page.locator('[data-test="error"]') 

    await expect(errorMessage).toBeVisible()
})