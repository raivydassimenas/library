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

    myLibrary.splice(index, 1);

    displayLibrary();
}

function toggleReadFunc(e) {
    const index = e.target.getAttribute("data");
    myLibrary[index].read = !myLibrary[index].read;

    displayLibrary();
}

function displayLibrary() {
    const library = document.querySelector("#library");

    library.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookElem = document.createElement("tr");

        const title = document.createElement("td");
        title.innerText = book.title;
        title.classList = "table-cell border-solid border-2 border-black p-1";
        bookElem.appendChild(title);

        const author = document.createElement("td");
        author.innerText = book.author;
        author.classList = "table-cell border-solid border-2 border-black p-1";
        bookElem.appendChild(author);

        const pages = document.createElement("td");
        pages.innerText = book.pages;
        pages.classList = "table-cell border-solid border-2 border-black p-1";
        bookElem.appendChild(pages);

        const read = document.createElement("td");
        read.innerText = book.read ? "Read" : "Not read";
        read.classList = "table-cell border-solid border-2 border-black p-1 text-center";
        bookElem.appendChild(read);

        const toggleReadCell = document.createElement("td");
        const toggleRead = document.createElement("button");
        toggleRead.addEventListener("click", toggleReadFunc, false);
        toggleRead.setAttribute("data", index);
        toggleRead.innerText = "READ";
        toggleRead.classList = "rounded-full bg-slate-500 border-solid border-2 border-black p-1";
        toggleReadCell.appendChild(toggleRead);
        toggleReadCell.classList = "table-cell border-solid border-2 border-black p-1 text-center";
        bookElem.appendChild(toggleReadCell);

        const deleteCell = document.createElement("td");
        const del = document.createElement("button");
        del.setAttribute("data", index);
        del.addEventListener("click", deleteBook, false);
        del.innerText = "DELETE";
        del.classList = "rounded-full bg-slate-500 border-solid border-2 border-black p-1";
        deleteCell.appendChild(del);
        deleteCell.classList = "table-cell border-solid border-2 border-black p-1 text-center";
        bookElem.appendChild(deleteCell);


        bookElem.classList = "table-row"
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

function cancelNewBook() {
    document.querySelector("#newBookForm").style.visibility = "hidden";
    document.querySelector("#newButton").style.visibility = "visible";
}

const submitNewBookButton = document.querySelector("#submitNewBook");
submitNewBookButton.addEventListener("click", submitNewBook, false);