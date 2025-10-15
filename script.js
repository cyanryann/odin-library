const myLibrary = [];
const lib = document.querySelector('.library');
const dialog = document.getElementById('bookadding');
myForm = document.getElementById("sub");
function Book(name, author, pages, hasRead)
{
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.id = crypto.randomUUID();
}
function addToLibrary(name, author, pages, hasRead)
{
    myLibrary.push(new Book(name, author, pages, hasRead));

}
function display() {
    myLibrary.forEach(element => {
        const newBook = document.createElement('div');
        newBook.id = element.id;
        const title = document.createElement('p');
        title.innerHTML = element.name + " by " + element.author + ". \n Read: " + element.hasRead;
        const pCount = document.createElement('p');
        pCount.textContent = "# of Pages: " + element.pages;
        const dButton = document.createElement("button");
        dButton.textContent = "Remove";
        dButton.onclick= () => deleteBook(element.id);
        const rButton = document.createElement("button");
        rButton.textContent = "Read";
        rButton.onclick = () => read(element.id);
        lib.appendChild(newBook);
        newBook.appendChild(title);
        newBook.appendChild(pCount);
        newBook.appendChild(dButton);
        newBook.appendChild(rButton)
    });
}
function clear() {
    while (lib.firstChild)
    {
        lib.removeChild(lib.firstChild);
    }
}
function popUp() {
    dialog.show();
}
function read(id) {
    myLibrary.forEach(element => {
        if (element.id == id)
        {
            element.hasRead = true;
        }
    });
    clear();
    display();
}
function loadBook(event) {
    const bname = document.getElementById("bname").value;
    const aname = document.getElementById("aname").value;
    const pcount = document.getElementById("pcount").value;
    const hread = document.getElementById("hread").value;
    addToLibrary(bname, aname, pcount, hread);
    clear();
    display();
    dialog.close();
    event.preventDefault();

}
function deleteBook(id) {
    console.log("RUNNING");
    myLibrary.forEach(element => {
        if (element.id == id)
        {
            myLibrary.splice(myLibrary.indexOf(element), 1);
        }
    });
    clear();
    display();
}
myForm.addEventListener("submit", loadBook);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
display();