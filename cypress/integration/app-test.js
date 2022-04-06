// Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new trick to the DOM.

describe("Sick Trick Wish List Site", () => {
  it("As a user first visits, they should see a Title, form, and a list of current tricks", () => {
    cy.visit("http://localhost:3000");
    cy.get(".App").contains("Sick Trick Wish List");
    cy.get("form").find("input");
    cy.get("form").find("select");
    cy.get("form").find("option").contains("--Please choose a stance--");
    cy.get("form").find("option").contains("--Please choose an obstacle--");
    cy.intercept("GET", "http://localhost:3001/api/v1/tricks", [
      {
        stance: "regular",
        name: "treflip",
        obstacle: "flat ground",
        tutorial: "https://www.youtube.com/watch?v=XGw3YkQmNig",
        id: 1,
      },
      {
        stance: "switch",
        name: "heelflip",
        obstacle: "stairs",
        tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        id: 2,
      },
      {
        stance: "regular",
        name: "frontside 50-50, backside 180 out",
        obstacle: "ledge",
        tutorial: "https://www.youtube.com/watch?v=9N9swrZU1HA",
        id: 3,
      },
    ]);
  });

  // it("As a user types into the form, they should see the text reflected in that input", () => {
  //   cy.get(".trick-name")
  // });  

});
