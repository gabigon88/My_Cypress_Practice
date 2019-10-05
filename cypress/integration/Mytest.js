describe('My First Cypress Test', function () {
    it('Search for singer!', function () {
        cy.visit("https://www.books.com.tw")

        // 如果有跳廣告視窗就關閉廣告視窗
        try{
            cy.get("#close_top_banner").click()
        }
        catch(e) {
        }

        cy.get("#key").type("python{enter}")
        
        cy.wait(1000)

        cy.get("#searchlist > ul > li:nth-child(1) > h3 > a")
        .should('have.attr', 'title')
        .and('contain', 'Python')
    })
})