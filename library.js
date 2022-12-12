let myLibrary = [
    {
        title: "Robinson Crusoe",
        author: "Daniel Defoe",
        pages: 200,
        read: true,
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function displayLibrary() {
    const library = document.querySelector("#library");

    myLibrary.forEach(book => {
        const bookElem = document.createElement("tr");

        const title = document.createElement("td");
        title.innerText = book.title;
        bookElem.appendChild(title);

        const author = document.createElement("td");
        author.innerText = book.author;
        bookElem.appendChild(author);

        const pages = document.createElement("td");
        pages.innerText = book.pages;
        bookElem.appendChild(pages);

        const read = document.createElement("td");
        read.innerText = book.read ? "Read" : "Not read";
        bookElem.appendChild(read);

        library.appendChild(bookElem);
    });
}

displayLibrary();

document.querySelector("#newBookForm").style.visibility = "hidden";

function newBook() {
    document.querySelector("#newBookForm").style.visibility = "visible";
    document.querySelector("#newButton").style.visibility = "hidden";
}