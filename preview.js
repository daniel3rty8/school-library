import { books_prev } from "./data.js";

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");
const hide_butt=document.getElementById("hide_butt");
const middle_div=document.getElementById("middle_div");
const login_div = document.getElementById("login_div");

let but = true;
window.addEventListener('resize',()=>{
  if(window.innerWidth >= 600){
    middle_div.style.display="flex"
    login_div.style.display="flex"
     hide_butt.textContent = "hide";
  }
})
hide_butt.addEventListener("click", () => {
  if ( middle_div.style.display==="flex") {
    hide_butt.textContent = "show";
    middle_div.style.display="none"
    login_div.style.display="none"

  } else {
    hide_butt.textContent = "hide";
       middle_div.style.display="flex"
    login_div.style.display="flex"
    but=!but
}})

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
