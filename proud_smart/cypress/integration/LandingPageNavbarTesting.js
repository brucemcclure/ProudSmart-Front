/// <reference types="Cypress" />

describe("Landing Page Navbar Testing", () => {
  it("Visits the Landing Page", () => {
    // Visiting a webpage
    cy.visit("http://localhost:3000/");
    //Click one certain element
    cy.contains("My Courses").click();
    //Assertion
    cy.url().should("include", "/users/dashboard");

    cy.contains("Edit Profile").click();
    cy.url().should("include", "/users/edit");

    //获取一个输入，输入进去并且验证文本值已经更新了
    // cy.get(".action-email")
    //   .type("fake@email.com")
    //   .should("have.value", "fake@email.com");
  });
});
