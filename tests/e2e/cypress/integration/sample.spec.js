/// <reference types="cypress" />

context("sample", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should have title text", () => {
    cy.contains("ChartToppers");
  });
});
