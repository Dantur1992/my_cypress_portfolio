import {
    inventorySelectors,
    cartSelectors,
    checkOutOneSelectors,
    checkOutTwoSelectors,
    checkOutCompleteSelectors
} from '../pages'

export const addItemToCart = (item_name: string) => {
    cy.get(inventorySelectors.classItemName)
        .contains(item_name)
        .closest(inventorySelectors.classInventoryItemDescription)
        .contains(inventorySelectors.contentsOfAddToCartButton)
        .click()
}

export const navigateToCart = () => {
    cy.get(inventorySelectors.buttonNavigationToCart).click()
}

export const navigateToCheckout = () => {
    cy.get(cartSelectors.buttonNavigateToCheckout).click()
}

export const fillCheckoutForm = (first_name: string, last_name: string, zip_code: string) => {
    cy.get(checkOutOneSelectors.inputFirstName).type(first_name)
    cy.get(checkOutOneSelectors.inputLastName).type(last_name)
    cy.get(checkOutOneSelectors.inputZipCode).type(zip_code)
}

export const navigateWithContinueButton = () => {
    cy.get(checkOutOneSelectors.buttonContiune).click()
}

export const finishingOrder = () => {
    cy.get(checkOutTwoSelectors.buttonFinished).click()
}

export const verifyIfOrderingFinishCorrectly = () => {
    cy.get(checkOutCompleteSelectors.headerComleteOrder)
        .should("have.text", checkOutCompleteSelectors.correctOrderMessage)
}