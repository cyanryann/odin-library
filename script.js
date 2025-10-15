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
        newBook = document.createElement('div');
        title = document.createElement('p');
        title.innerHTML = element.name + " by " + element.author + ". \n Read: " + element.hasRead;
        lib.appendChild(newBook);
        newBook.appendChild(title);
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
function loadBook(event) {
    const bname = document.getElementById("bname").value;
    const aname = document.getElementById("aname").value;
    const pcount = document.getElementById("pcount").value;
    const hread = document.getElementById("hread").value;
    console.log(bname);
    addToLibrary(bname, aname, pcount, hread);
    clear();
    display();
    event.preventDefault();
}
myForm.addEventListener("submit", loadBook);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
display();