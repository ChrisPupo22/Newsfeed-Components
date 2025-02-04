// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton')
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand'
    this.expandButton.style.border = '1px solid black'
    this.expandButton.style.padding = '7px'
    this.expandButton.style.borderRadius = '7.5px'
    this.expandButton.style.background = '#388E3C'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    domElement.addEventListener('click', this.expandArticle);
    console.log(domElement.expandButton);
  }
  

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    event.currentTarget.classList.toggle('article');
  
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles = Array.from(articles).forEach(article => { new Article(article)});

