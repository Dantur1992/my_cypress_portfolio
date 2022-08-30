import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {
    navigateToLoginPage,
    verifyIfUrlIsCorrect,
    clickOnLoginButton,
    verifyIfProperMessageForUserRequierShows,
    inputUsername,
    inputPassword
} from "../actions/loginActions"
import { verifyProperUrlForInventory } from "../actions/loginActions"
import { verifyProperSessionName } from "../actions/generalActions"

Given("The user navigate to login page", () => {
    navigateToLoginPage();
    verifyIfUrlIsCorrect();
})
When("The user clicks on login button", () => {
    clickOnLoginButton();
})
Then("The user sees message about faild login", () => {
    verifyIfProperMessageForUserRequierShows();
})

When("The user input username: {string}", (user_name) => {
    inputUsername(user_name)
})

And("The user input password: {string}", (password) => {
    inputPassword(password)
})

Then("The user sees inventory page for {string}", (user_name) => {
    verifyProperUrlForInventory();
    verifyProperSessionName(user_name);
})