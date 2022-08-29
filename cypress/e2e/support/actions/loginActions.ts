import { loginSelectors } from "../pages"
import { inventorySelectors } from "../pages";

export const navigateToLoginPage = () => {
    cy.visit("/")
}
export const verifyIfUrlIsCorrect = () => {
    cy.url().should("eq", loginSelectors.pageUrl)
}
export const clickOnLoginButton = () => {
    cy.get(loginSelectors.buttonLogin).click()
}
export const verifyIfProperMessageForUserRequierShows = () => {
    cy.get(loginSelectors.labelUsernameReqiredError)
        .should("have.text", loginSelectors.userNameRequiredMessage)
}
export const inputUsername = (user_name: string) => {
    cy.get(loginSelectors.inputUsername).type(user_name)
}
export const inputPassword = (password: string) => {
    cy.get(loginSelectors.inputPassword).type(password)
}
export const verifyProperUrlForInventory = () => {
    cy.url().should("include", '/inventory.html')
}

export const verifyPageLoadedCorrectly = () => {
    
}