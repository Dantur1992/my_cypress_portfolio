import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import { chnagePageResolution } from "../actions/generalActions"

And("Page is open in resolution {string}", (resolution) => {
    chnagePageResolution(resolution)
})