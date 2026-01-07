import { books, books_prev } from "./data.js";
const hide_butt=document.getElementById("hide_butt");
const middle_div=document.getElementById("middle_div");
const login_div = document.getElementById("login_div");
const books_box=document.getElementById("books_box");

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
for (let i = 0; i < books.length; i++) {
  let book = document.createElement("a");
  book.href = `preview.html?id=${books[i].id}`;
  book.className = "book-card";

  book.innerHTML = `
    <div class="image_box">
      <img src="${books[i].book_photo}" class="imgs">
    </div>
    <div class="object">
      <div class="books_name">${books[i].book_name}</div>
      <div class="books_grade">Grade ${books[i].grade_level}</div>
      <div class="books_dicription">
        ${books[i].dicription}
      </div>
    </div>
  `;

  books_box.appendChild(book);
}
