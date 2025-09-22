const myLibrary = [];
const lib = document.querySelector('.library');
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
        title.innerHTML = element.name + " by " + element.author
        lib.appendChild(newBook);
        newBook.appendChild(title);
    });
}
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
addToLibrary("House of Leaves", "Mark Z. Danielewski", 561, false);
display()