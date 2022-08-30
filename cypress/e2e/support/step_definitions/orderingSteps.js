import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {
    addItemToCart,
    navigateToCart,
    navigateToCheckout,
    fillCheckoutForm,
    navigateWithContinueButton,
    finishingOrder,
    verifyIfOrderingFinishCorrectly
} from "../actions/orderingActions"

Then("The user add {string} to cart", (item_name) => {
    addItemToCart(item_name)
})

And("The user is navigating to cart", () => {
    navigateToCart()
})

And("The user is clicks on checkout", () => {
    navigateToCheckout()
})

And("The user is filling checkout form with: {string},{string},{string}",
    (first_name, last_name, zip_code) => {
        fillCheckoutForm(first_name, last_name, zip_code)
    })

And("The user click on continue button", () => {
    navigateWithContinueButton()
})

And("The user click on finish button", () => {
    finishingOrder()
})
And("The user sees that order complit correctly", () => {
    verifyIfOrderingFinishCorrectly()
})