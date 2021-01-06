describe("Main page of the 'BookShelf' application", () => {
    before("open main page", () => {
        cy.visit("/")
    })

    it("should have title", () => {

        cy.title().should('eq', "Book shelf")
        cy.contains(".navbar-brand", "Home bookshelf") // Page header
    })

    describe('books list', () => {
        it("allows a book deletion", () => {
            // item with book's name.
            cy.contains("PostgreSQL")
                // click delete button
                .parent().next("button").should("have.text", "Delete")
                .click()

            cy.contains("PostgreSQL").should("not.exist")
        })

        it("allows addition to a book category", () => {
            const newBookName = "A new book's name";
            cy.get(".card-footer > input").type(newBookName)
            cy.get(".card-footer > button").click()

            cy.contains('.card-body > li:last', newBookName)
        })

        describe("a book renaming", () => {

            it("applies new name to book when press enter in the input box", () => {
                const anotherBookName = "Another book name";
                cy.get('[data-for-test=book-item]')
                    .last()
                    .within(() => {
                        cy.get('div[data-for-test=editable-text]').invoke('text')
                            .then(oldBookTitle => {
                                cy.get('input[data-for-test=editable-text]').should('not.exist')
                                cy.get('div[data-for-test=editable-text]').dblclick()

                                cy.get('div[data-for-test=editable-text]').should('not.exist')
                                cy.get('input[data-for-test=editable-text]')
                                    .should('have.value', oldBookTitle)
                                    .clear().type(anotherBookName).type("{Enter}")

                                cy.get('input[data-for-test=editable-text]').should('not.exist')

                            })
                    })
                    cy.get('[data-for-test=book-item]').last()
                        .get('div[data-for-test=editable-text]').contains(anotherBookName)
            })

            describe('cancellation', () => {
                it("an old name is shown after abort editing", () => {
                    cy.get('[data-for-test=book-item]')
                        .first()
                        .within(() => {
                            cy.get('div[data-for-test=editable-text]').dblclick()
                            cy.get('input[data-for-test=editable-text]').type("{esc}")

                            cy.get('input[data-for-test=editable-text]').should("not.exist")
                            cy.get('div[data-for-test=editable-text]').should("exist")
                        })
                })

                it("an input element turns back into text when user press escape", () => {
                    cy.get('[data-for-test=book-item]')
                        .first()
                        .within(() => {
                            cy.get('div[data-for-test=editable-text]').invoke("text").then($oldName => {
                                cy.get('div[data-for-test=editable-text]').dblclick()
                                cy.get('input[data-for-test=editable-text]').type("this text shouldn't be saved{esc}")

                                cy.get('div[data-for-test=editable-text]').invoke("text").should('eq', $oldName)
                            })
                        })
                })
            })
        })

    })

    describe('categories selector', () => {
        it("initial state have two categories by default", () => {
            cy.get(".navbar > ul > li").should($items => {
                expect($items).to.have.length(2)
            })
        })

        it("user can choose another category", () => {
            const oldActiveCategoryName = "Books I have";
            cy.get(".navbar > ul > li.active").should('have.text', oldActiveCategoryName)
            cy.get("h2.card-header").should("have.text", oldActiveCategoryName)

            // click to inactive category
            cy.contains(".navbar > ul > li", "want to buy")
                .click()

            const newActiveCategoryName = "Books I want to buy";
            cy.get(".navbar > ul > li.active").should('have.text', newActiveCategoryName)
            cy.get("h2.card-header").should("have.text", newActiveCategoryName)
        })
    })

})