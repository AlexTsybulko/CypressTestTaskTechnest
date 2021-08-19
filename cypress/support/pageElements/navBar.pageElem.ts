export default class NavBar {
    createNewArticle(): void {
        cy.get('a[routerlink = "/editor"]').click({force:true});
    }
    
    openHomePage(): void {
        cy.get('a').contains('Home').click({force:true});
    }
}
