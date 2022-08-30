import {
    inventorySelectors,
    cartSelectors,
    checkOutOneSelectors,
    checkOutTwoSelectors,
    checkOutCompleteSelectors
} from '../pages'

export const addItemToCart = (item_name) => {
    cy.get(inventorySelectors.classItemName)
        .contains(item_name)
        .closest(inventorySelectors.classInventoryItemDescription)
        .contains(inventorySelectors.contentsOfAddToCartButton)
        .should('have.text', inventorySelectors.contentsOfAddToCartButton)
        .click()
}

export const navigateToCart = () => {
    cy.get(inventorySelectors.buttonNavigationToCart).click()
}

export const navigateToCheckout = () => {
    cy.get(cartSelectors.buttonNavigateToCheckout).click()
}

export const verifyIdUrlForCheckoutOne = () => {
    cy.url().should('include', checkOutOneSelectors.urlForCheckoutOne)
}

export const fillCheckoutForm = (first_name, last_name, zip_code) => {
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
        .should('have.text', checkOutCompleteSelectors.correctOrderMessage)
}

export const verifyChangedONameForCardButton = (item_name) => {
    cy.get(inventorySelectors.classItemName)
        .contains(item_name)
        .closest(inventorySelectors.classInventoryItemDescription)
        .contains(inventorySelectors.contentsOfAddToCartButtonAfterAddedItem)
        .should('have.text', inventorySelectors.contentsOfAddToCartButtonAfterAddedItem)
}

export const verifyIfOneItemWasAddedToCart = () => {
    cy.get(inventorySelectors.shippingCartBadge)
        .should('have.text', '1')
}

export const veryfiyIfItemIsInCard = (item_name) => {
    cy.get(cartSelectors.cardListClass)
        .find(cartSelectors.itemNameClass)
        .should('have.text', item_name)
}
export const veryfiyIfItemCost = (price) => {
    cy.get(cartSelectors.cardListClass)
        .find(cartSelectors.itemPriceClass)
        .should('have.text', price)
}

export const verifyForm = () => {
    cy.get(checkOutOneSelectors.inputFirstName)
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('contain', checkOutOneSelectors.placeholderFirstName)

    cy.get(checkOutOneSelectors.inputLastName)
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('contain', checkOutOneSelectors.placeholderLastName)

    cy.get(checkOutOneSelectors.inputZipCode)
        .should('be.visible')
        .invoke('attr', 'placeholder')
        .should('contain', checkOutOneSelectors.placeholderZipCode)
}

export const verifyIdUrlForCheckoutTwo = () =>{
    cy.url().should('include', checkOutTwoSelectors.urlForCheckoutTwo)
}

export const verifyIdUrlForCompliteOrder = () =>{
    cy.url().should('include', checkOutCompleteSelectors.urlForCompletePage)
}