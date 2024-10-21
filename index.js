function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((books) => {
      renderBooks(books); // Pass the books to the render function
    })
    .catch((error) => {
      console.error("Error fetching books:", error); // Handle any errors
    });
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
