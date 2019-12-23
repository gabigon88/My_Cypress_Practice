describe('博客來 Search test', function () {
    it('Search for book!', function () {
        var keyword = 'python'
        var regex = new RegExp(keyword, 'i') // case-insensitive

        cy.visit("https://www.books.com.tw")

        // 如果有跳廣告視窗就關閉廣告視窗
        // {force: true} This disables all error checking
        cy.get("#close_top_banner").click({force: true})

        cy.get("#key").type(keyword + "{enter}")

        cy.get("#searchlist > ul > li:nth-child(1) > h3 > a")
        .should('have.attr', 'title')
        .and('match', regex)
    })
})