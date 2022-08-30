export const getResponseAboutCat = () => {
    cy.request("GET", "https://catfact.ninja/fact")
        .as('catFact')
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("fact").to.be.a('string')
            expect(response.body).to.have.property("length").to.be.a('number')
        })
}

export const printFunFactInLog = () =>{
    cy.get('@catFact').then((response) =>{
        cy.log(response.body.fact)
    })
}

export const printLengthFunFactInLog = () =>{
    cy.get('@catFact').then((response) =>{
        cy.log(response.body.length)
    })
}