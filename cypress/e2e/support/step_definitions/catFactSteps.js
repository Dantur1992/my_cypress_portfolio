import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import {
    getResponseAboutCat,
    printFunFactInLog,
    printLengthFunFactInLog

} from "../actions/catFactActions"


Given("The user is sending request for random cat fact", () => {
    getResponseAboutCat()
})

Then("The user sees funfact in cypress log", ()=>{
    printFunFactInLog()
})

And("The user sees length of funfact in cypress log", ()=>{
    printLengthFunFactInLog()
})