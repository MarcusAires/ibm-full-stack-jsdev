const bookName = document.getElementById('bookName');
const authorName = document.getElementById('authorName');
const bookDescription = document.getElementById('bookDescription');
const pagesNumber = document.getElementById('pagesNumber');
const booksDisplay = document.getElementById('books');

let books = [];

function addBook() {
    let book = {
        bookName: bookName.value,
        authorName: authorName.value,
        bookDescription: bookDescription.value,
        pagesNumber: pagesNumber.value
    };

    books.push(book);

    // Atualiza a exibição dos livros
    displayBooks();

    // Limpa os inputs
    bookName.value = '';
    authorName.value = '';
    bookDescription.value = '';
    pagesNumber.value = '';
}

function displayBooks() {
    booksDisplay.innerHTML = ''; // Limpa antes de atualizar

    books.forEach(book => {
        booksDisplay.innerHTML += `
            <div>
                <h1> Book 1 </h1>
                <p><strong>Nome:</strong> ${book.bookName}</p>
                <p><strong>Autor:</strong> ${book.authorName}</p>
                <p><strong>Descrição:</strong> ${book.bookDescription}</p>
                <p><strong>Páginas:</strong> ${book.pagesNumber}</p>
                <hr>
            </div>
        `;
    });
}

function deleteBook(){
    books.splice(books[0], 1);
    displayBooks();
}
