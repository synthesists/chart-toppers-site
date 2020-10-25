/// <reference types="cypress" />

context("sample", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should have title text", () => {
    // https://on.cypress.io/window
    cy.contains("Chart Toppers");
  });
});
