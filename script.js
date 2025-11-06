const myLibrary=[];

function Book(title,author,pages,read){
    this.id= crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.toggleRead= function(){
    this.read=!this.read;
}

function addBookToLibrary(title,author,pages,read){
  const newBook= new Book(title,author,pages,read);
  myLibrary.push(newBook);
}

addBookToLibrary("Revive your heart","Nouman Ali Khan",155,true);


function displayBooks(){
  const libraryContainer = document.querySelector("library");
  libraryContainer.innerHTML="";

  myLibrary.forEach(book=>{
    const bookCard= document.createElement("div");
    bookCard.dataset.id=book.id;

    bookCard.innerHTML=`
    <h3>${book.title}<h3>
    <p>Author: ${book.author}</p>
    <p> Pages: ${book.pages}</p>
    <p> Read: ${book.read ? "Yes" : "No"}</p>
    <button class="toggle-read">Toggle Read</button>
    <button class="remove-book"> Remove</button>
    `;
  })
}