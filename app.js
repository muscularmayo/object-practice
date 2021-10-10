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
    let remove = document.createElement('button');
    remove.innerHTML = 'remove this'
    let info = document.createElement('p')
    info.innerHTML = `title: ${current.title}, author: ${current.author}, pages: ${current.pages}, read: ${current.read}`;
    remove.onClick = removeCurrentNode(this)
    info.appendChild(remove)
    container.appendChild(info);
  }
}

function clickHandler() {
  let title = prompt('title?')
  const author = prompt('author?')
  const pages = prompt('pages?')
  const read = prompt('read?')
  title = new Book(title,author,pages,read);
  addBookToLibrary(title)
  let info = document.createElement('p')
  info.innerHTML = `title: ${title.title}, author: ${title.author}, pages: ${title.pages}, read: ${title.read}`;
  let remove = document.createElement('button');
  remove.innerHTML = 'remove this'
  remove.onClick = removeCurrentNode(this);
  info.appendChild(remove)
  container.appendChild(info);



  return title;
}

function removeChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeCurrentNode (e) {
  console.log(e)
  this.parent.remove();
}

