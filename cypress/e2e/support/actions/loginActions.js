import { loginSelectors } from '../pages'
import { inventorySelectors } from '../pages'

export const navigateToLoginPage = () => {
    cy.visit('/')
}
export const verifyIfUrlIsCorrect = () => {
    cy.url()
        .should('eq', loginSelectors.pageUrl)
}
export const clickOnLoginButton = () => {
    cy.get(loginSelectors.buttonLogin)
        .should('be.enabled')
        .should('be.visible')
        .click()
}
export const verifyIfProperMessageForUserRequierShows = () => {
    cy.get(loginSelectors.labelUsernameReqiredError)
        .should('be.visible')
        .should('have.text', loginSelectors.userNameRequiredMessage)
}
export const inputUsername = (user_name) => {
    cy.get(loginSelectors.inputUsername)
        .should('be.visible')
        .type(user_name)
}
export const inputPassword = (password) => {
    cy.get(loginSelectors.inputPassword)
        .should('be.visible')
        .type(password)
}
export const verifyProperUrlForInventory = () => {
    cy.url()
        .should('include', '/inventory.html')
}
export const verifyInventoryPage = () => {
    cy.get(inventorySelectors.pageTitleClass)
        .should('be.visible')
        .should('have.text', inventorySelectors.pageTitle)
    cy.get(inventorySelectors.burgerButtonClass)
        .should('be.visible')
    cy.get(inventorySelectors.productSort)
        .should('be.visible')
    cy.get(inventorySelectors.inventoryContainer)
        .should('be.visible')
    cy.get(inventorySelectors.buttonNavigationToCart)
        .should('be.visible')
}


export const verifyPageLoadedCorrectly = () => {
    cy.get(loginSelectors.buttonLogin)
        .should('be.visible')
        .invoke('attr', 'value')
        .should('contain', loginSelectors.textButtonLogin)

    cy.get(loginSelectors.inputUsername)
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('contain', loginSelectors.placeholderUsername)

    cy.get(loginSelectors.inputPassword)
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('contain', loginSelectors.placeholderPassword)

    cy.get(loginSelectors.loginLogo)
        .should('be.visible')

    cy.get(loginSelectors.robotPicture)
        .should('be.visible')
}

export const verifyEnterUsername = (user_name) => {
    cy.get(loginSelectors.inputUsername)
        .should('be.visible')
        .invoke('attr', 'value')
        .should('contain', user_name)
}

export const verifyEnterPassword = (password) => {
    cy.get(loginSelectors.inputPassword)
        .should('be.visible')
        .invoke('attr', 'value')
        .should('contain', password)
}

export const verifyIfProperMessageForUserBlocShows = () => {
    cy.get(loginSelectors.labelUsernameReqiredError)
    .should('be.visible')
    .should('have.text',loginSelectors.userBlockMessage)
}