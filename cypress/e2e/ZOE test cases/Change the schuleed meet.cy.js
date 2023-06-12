let userdata;
let getTexto;


describe('editar fecha de meeting', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture("usuarios").then((data)  => {userdata=data})
        
    })

    it('Re agendar Meet',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
          const fecha = userdata.date;         
        
        cy.wait(5000)
        .get('[data-testid="calendar-day-'+fecha.match(/\d+/)+'"]')
        .should('be.visible')
        .click();
        
        cy.get('.styles-module_timesContainer__0JX0d > .styles-module_headerContainer__nFW4i > span')
        .should('have.text', userdata.date);

        cy.wait(4000)
        .get('[data-testid="1-availability"]')
        .click()
        
        cy.get ('.ZUIButton--primary')
        .click();

        cy.get('h3.jsx-1005577674')
        .should('have.text','Confirm reschedule');
        
        cy.get('#name')
        .clear()
        .type(userdata.username);
        
        cy.get('#last_name')
        .clear()
        .type(userdata.lastname);
        
        cy.get('#email')
        .clear()
        .type(userdata.email);
        
        cy.get('#phone_number')
        .clear()
        .type(userdata.phone);

        
        cy.get('.styles_confirmationSchedule__cta__CHKbr > .ZUIButton--primary')
        .click();

        cy.wait(5000)
        .get('.styles_modalDashboard__successful__dYGGZ')
        .should('have.text','Meeting with MarcusSuccessfully rescheduled!You can now close this window')

    });
})