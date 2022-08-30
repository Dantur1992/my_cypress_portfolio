export const chnagePageResolution = (resolution) => {
    const DEVICE_SIZE = {
        XL: [1920, 1080],
        L: [820, 1180],
        M: [576, 960]
    };
    const viewportWidth = DEVICE_SIZE[resolution.toUpperCase()][0]
    const viewportHeight = DEVICE_SIZE[resolution.toUpperCase()][1]
    cy.viewport(viewportWidth, viewportHeight)
}

export const verifyProperSessionName = (user_name) => {
    cy.getCookie("session-username")
        .should("have.property", "value", user_name)
}