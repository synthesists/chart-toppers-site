/// <reference types="cypress" />

context("sample", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should have title text", () => {
    cy.get("input").type("Kanye west");
    cy.get("a").contains("Kanye West").click();
    cy.url().should("eq", "http://localhost:3000/artists/5K4W6rqBFWDnAN6FQUkS6x/chart");
  });
});
