import { books_prev } from "./data.js";

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");

const book = books_prev.find(b => b.id === bookId);

const container = document.getElementById("book_detail");

if (!book) {
  container.innerHTML = "<p>Book not found.</p>";
} else {
  container.innerHTML = `
  <div class="img"><img src="${book.cover}" class="imgs"></div>
    <div class="details">
      <h1>${book.title}</h1>
      <p>${book.curriculum}</p>
      <p>${book.description}</p>
      <p>PDF · ${book.size}</p>
    </div>
    <div class="down_read_btn">
      <a href="${book.file}" download>Download</a>
      <a href="${book.file}" target="_blank">Read Online</a>
      
    </div>
    `;
}
