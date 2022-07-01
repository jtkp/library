let myLibrary = [];

let form = document.querySelector("#form");
form.addEventListener('submit', e => addBook(
    e.target[0].value, e.target[1].value, e.target[2].value));

let content = document.querySelector("#content");

function Book(title, author, pages) {
    this.title = title;
    this.author = author; 
    this.pages = pages;
    this.read = false;
}

function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    content.replaceChildren();
    let counter = 0;
    myLibrary.forEach(element => {
        let div = document.createElement('div');
        div.className = 'book';

        let p1 = document.createElement('p');
        p1.innerHTML = element.title;
        div.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerHTML = element.author;
        div.appendChild(p2);

        let p3 = document.createElement('p');
        p3.innerHTML = element.pages;
        div.appendChild(p3);

        let p4 = document.createElement('p');
        p4.innerHTML = element.read;
        div.appendChild(p4);

        let button1 = document.createElement('button');
        button1.innerHTML = 'Mark as read';
        button1.className = 'read'; 
        div.appendChild(button1);

        let button2 = document.createElement('button');
        button2.innerHTML = 'Delete';
        button2.className = 'delete'; 
        button2.setAttribute('data-index', counter);
        div.appendChild(button2);

        button2.addEventListener('click', e => removeBook(e.target.dataset.index));

        content.appendChild(div);

        counter++;
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}