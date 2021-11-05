/// <reference types="cypress" />

const USERNAME="dreamtheater@list.ru";
const PASSWORD="123456"

describe('should be needful inputs', () => {
    it('should be country input', () => {
        cy.visit('/');
        cy.findByRole('textbox', {
            name: /введите вашу почту/i
          }).type('dreamtheater@list.ru');
        
    })
})

export {}