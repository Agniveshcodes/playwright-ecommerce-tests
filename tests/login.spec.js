import {test,expect} from '@playwright/test'

test('login with valid credentials' , async({page})=>{
    await page.goto("https://www.saucedemo.com/")

    await page.fill('#user-name','visual_user')
    await page.fill('#password','sceret_sauce')

    await expect(page).toHaveURL('https://www.saucedemo.com/')
})