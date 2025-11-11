const { createElement } = require("react");

const myLibray=[];

function Book(title,author,pages,read,like){
  this.id=crypto.randomUUID();
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.like=like;
}

Book.prototype.toggleRead=function(){
  this.read=!this.read;
}

Book.prototype.toggleLike= function (){
  this.like=!this.like;
}

function addBook(){
     myLibray.push(book);
}

function removeBook(){
    const index= myLibrary.findIndex( (book)=>book.id === id);
    if(index !==-1){
      myLibray.splice(index,1);
    }
}


function displayBooks(){
     const library= document.getElementById("library");
     library.innerHTML="";

     myLibray.forEach((book)=>{

     const booCard= createElement("div");
     bookCard.classList.add("book-card");

     bookCard.innerHTML=`
      <h3>Title: ${book.title}</h3>
      <h3>Author: ${book.author}</h3>
      <h3>Pages: ${book.pages}</h3>
      <button class="read" data-id="${book.id}">Read</button>
      <button class="like" data-id="${book.id}">Liked</button>
      <button class="remove" data-id="${book.id}">Remove</button>
     `
       library.appendChild("book-card");
     });

     attachEventListeners();
}