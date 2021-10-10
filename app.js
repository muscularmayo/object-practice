let myLibrary = [];
const container = document.querySelector('.container');

//remove.onClick = removeCurrentNode(this);

const Dune = new Book('Dune', 'Herbert', 250, true);
addBookToLibrary(Dune)
const Foundation = new Book('Foundation', 'Asimov', 200, true);
addBookToLibrary(Foundation)

function Book (title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  let infoString = `${this.title} by ${this.author}, ${this.pages} pages long, `
  if(this.read === true) {
    infoString += 'have read'
  } else {
    infoString += 'have not read'
  }
  return infoString;
}

function addBookToLibrary(book) {

  return myLibrary.push(book);

}

function bookDisplay() {
  removeChildNodes(container)
  for(let i=0; i<myLibrary.length; i++) {
    let current = myLibrary[i]
    createListElement(myLibrary[i])
  }
}

function clickHandler() {
  let title = prompt('title?')
  const author = prompt('author?')
  const pages = prompt('pages?')
  const read = prompt('read?')
  title = new Book(title,author,pages,read);
  addBookToLibrary(title)
  createListElement(title);
  return title;
}

function removeChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeCurrentNode () {
  this.parentElement.remove();
}

function toggleReadStatus () {
  let x = this.parentElement
  x.value.read = !x.value.read
  x.innerHTML = `title: ${x.value.title}, author: ${x.value.author}, pages: ${x.value.pages}, read: ${x.value.read}`;

  buttonAppender(x);

}

function createListElement (obj) {
  let info = document.createElement('p')
  info.innerHTML = `title: ${obj.title}, author: ${obj.author}, pages: ${obj.pages}, read: ${obj.read}`;
  info.value = obj;

  buttonAppender(info);

  container.appendChild(info);
}

function buttonAppender(element) {
  let remove = document.createElement('button');
  remove.innerHTML = 'remove this'
  remove.addEventListener('click', removeCurrentNode)

  let read = document.createElement('button')
  read.innerHTML = 'toggle read';
  read.addEventListener('click', toggleReadStatus)

  element.appendChild(remove);
  element.appendChild(read);

}