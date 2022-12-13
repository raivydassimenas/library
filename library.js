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

function deleteBook(e) {
    const index = e.target.getAttribute("data");
    console.log(index);

    myLibrary.splice(index, 1);

    displayLibrary();
}

function displayLibrary() {
    const library = document.querySelector("#library");

    library.innerHTML = "";

    myLibrary.forEach((book, index) => {
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

        const deleteCell = document.createElement("td");
        const del = document.createElement("button");
        del.setAttribute("data", index);
        del.addEventListener("click", deleteBook, false);
        del.innerText = "DELETE";
        deleteCell.appendChild(del);
        bookElem.appendChild(deleteCell);


        bookElem.setAttribute("data", index);

        library.appendChild(bookElem);
    });
}

displayLibrary();

document.querySelector("#newBookForm").style.visibility = "hidden";

function newBook() {
    document.querySelector("#newBookForm").style.visibility = "visible";
    document.querySelector("#newButton").style.visibility = "hidden";
}



function submitNewBook(e) {

    const newBook = new Book (
        document.querySelector("#title").value,
        document.querySelector("#author").value,
        document.querySelector("#pages").value,
        document.querySelector("#read").value
    );

    myLibrary.push(newBook);

    displayLibrary();

    document.querySelector("#newBookForm").style.visibility = "hidden";
    document.querySelector("#newButton").style.visibility = "visible";

    e.preventDefault();
}

const submitNewBookButton = document.querySelector("#submitNewBook");
submitNewBookButton.addEventListener("click", submitNewBook, false);