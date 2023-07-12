
describe('Test gameplay', () => {
  before(() => {
    cy.visit('http://192.168.0.90:8080')
  })

  describe('Inicio', () => {
    it('Existe botón para iniciar el juego', () => {
      cy.get('#iniciar-juego')
    })
    it('Inicia el juego correctamente', () => {
      cy.get('#iniciar-juego').click()
      cy.get('#tablero > .juego__boton').should('have.length', 4)
      cy.get('.juego__info').should('contain','Juega Simon')
    })
  })
  describe('Juego', () => {
    beforeEach(() => {
      cy.get('.activo').as('botonCorrecto')

    })
    
    it('El click correcto pasa de ronda', () => {
      cy.get('.juego__info').as('mensajes').should('contain','Juega usted')
      cy.get('@botonCorrecto').click()
      cy.get('@mensajes').should('contain','Juega Simon')
    })
    it('Clickea incorrecto', () => {
      cy.get('.juego__info').as('mensajes').should('contain','Juega usted')

      cy.get('@botonCorrecto').siblings('.juego__boton').first().click()

      cy.get('@mensajes').should('contain', 'Perdiste en la ronda 2')
    })

  })

})