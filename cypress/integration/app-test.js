// Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new trick to the DOM.

describe("Sick Trick Wish List Site", () => {
  it("As a user first visits, they should see a Title, form, and a list of current tricks", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Sick Trick Wish List")
    cy.get("form")
    cy.contains
  })
})