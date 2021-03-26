describe('Inputs', () => {
    it('can navigate to the website', () => {
        cy.visit('http://localhost:3000')
    })
  
    it('can do some basic math', () => {
          expect(1+1).to.equal(2); //assertions
          expect(1+2).to.not.equal(4);
          expect({}).not.to.equal({}); // === is true (deep equality)
          expect({}).to.eql({}) // == is true
        });
  
  describe('can check checkboxes and submit', () => {
    it("can select a pizza size", () => {
        cy.get("select")
          .select("small")
          .should("have.value", "small")
    })
  
    it("can select multiple toppings", () => {
      cy.get('[type="checkbox"]')
        .check()
  });
  
    it("can submit the order", () => {
        cy.get("button#myBtn")
          .click()     
    })
  })