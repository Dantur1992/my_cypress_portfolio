import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {
    addItemToCart,
    navigateToCart,
    navigateToCheckout,
    fillCheckoutForm,
    navigateWithContinueButton,
    finishingOrder,
    verifyIfOrderingFinishCorrectly,
    verifyChangedONameForCardButton,
    verifyIfOneItemWasAddedToCart,
    veryfiyIfItemIsInCard,
    veryfiyIfItemCost,
    verifyIdUrlForCheckoutOne,
    verifyForm,
    verifyIdUrlForCheckoutTwo,
    verifyIdUrlForCompliteOrder
} from "../actions/orderingActions"

Then("The user add {string} to cart", (item_name) => {
    addItemToCart(item_name)
    verifyChangedONameForCardButton(item_name)
    verifyIfOneItemWasAddedToCart()
})

And("The user is navigating to cart", () => {
    navigateToCart()
})

And("The user is clicks on checkout", () => {
    navigateToCheckout()
    verifyIdUrlForCheckoutOne()
    verifyForm()
})

And("The user is filling checkout form with: {string},{string},{string}",
    (first_name, last_name, zip_code) => {
        fillCheckoutForm(first_name, last_name, zip_code)
    })

And("The user click on continue button", () => {
    navigateWithContinueButton()
    verifyIdUrlForCheckoutTwo()
})

And("The user click on finish button", () => {
    finishingOrder()
    verifyIdUrlForCompliteOrder()
})
And("The user sees that order complit correctly", () => {
    verifyIfOrderingFinishCorrectly()
})

And("The user sees {string} in cart", (item_name) =>{
    veryfiyIfItemIsInCard(item_name)
})
And("The user sees price for item to be {string}", (price) =>{
    veryfiyIfItemCost(price)
})
