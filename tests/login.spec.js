import {test,expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'

test('login with valid credentials' , async({page})=>{
    const newLogin = new loginPage(page)

    await newLogin.goTOLoginPage()
    await newLogin.login('visual_user' , 'secret_sauce')

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})