import NavBar from '../pageElements/navBar.pageElem';

export class NewArticlePage {
    articleContent:any;
    articleTitle:string;
    articleDescription:string;
    articleBody:string;
    articleTags:string;
    navBar:NavBar

    constructor(articleContent:any, id:number) {
        this.articleTitle = `${articleContent.title}_${id}`;
        this.articleDescription = `${articleContent.desc}_${id}`;
        this.articleBody = `${articleContent.body}_${id}`;
        this.articleTags = `${articleContent.tagList}_${id} `;
        this.navBar = new NavBar();
    }

    createNewArticle(articleContent:any, id:number):void {
        cy.get('input[formcontrolname = "title"]')
          .type(this.articleTitle);
        cy.get('input[formcontrolname = "description"]')
          .type(this.articleDescription);
        cy.get('textArea[formcontrolname = "body"]')
          .type(this.articleBody);
        cy.get('input[formcontrolname = "tagList"]')
          .type(this.articleTags)
        cy.contains('Publish Article').click();
    }

    checkArticleContent(articleContent:any, id:number):void {
        cy.get('.banner')
          .then(banner => {
            cy.wrap(banner).get('h1')
              .should('have.text', this.articleTitle);
        });
        cy.get('div[class = "row article-content"]>div')
          .then(content => {
            cy.wrap(content).find('div').eq(0).should('have.text', this.articleDescription);
            cy.wrap(content).find('div').last().get('p').should('have.text', this.articleBody);
        })
        cy.get('li.tag-default')
          .should('have.text', this.articleTags);
        cy.get('a.author')
          .eq(0)
          .should('have.text', Cypress.env('USERNAME'));
        cy.get('div.close-button')
          .click({multiple:true});
    }
}