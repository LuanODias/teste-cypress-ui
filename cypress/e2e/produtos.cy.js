/// <reference types="cypress"/>

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Aether Gym Pant')
            .click()
    });

    it('Deve adicionar o produto no carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Aether Gym Pant')
            .click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.plus').click()
        //cy.get('.minus').click()
        //cy.get('.plus').click()
        cy.get('.input-text')
            .clear()
            .type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade +' × “Aether Gym Pant” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Aether Gym Pant', 2)
    });
})