context("findArtistAndVisitTheirPage", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should have title text", () => {
    cy.get("input").type("Kanye west");
    cy.get("a").contains("Kanye West").trigger("mouseover").click();
    cy.url().should("include", "/artists/5K4W6rqBFWDnAN6FQUkS6x");
    cy.contains("Kanye West");
    cy.contains("rap");
    cy.contains("Gold Digger");
  });
});
