import { books } from "./data.js";

const params = new URLSearchParams(window.location.search);
const bookId = params.get("id");
const hide_butt = document.getElementById("hide_butt");
const middle_div = document.getElementById("middle_div");
const login_div = document.getElementById("login_div");

let but = true;
window.addEventListener('resize',()=>{
  if(window.innerWidth >= 600){
    middle_div.style.display="flex"
    but=true
    container.classList.add("change")
    navigation2.classList.add("change")

  }
})
const container=document.getElementById("container")
container.addEventListener("click",()=>{
     if (but) {
          but=false
          middle_div.style.display="none"
          login_div.style.display="none"
          container.classList.remove("change")
          navigation2.classList.remove("change")

  } 
  else {
    but=true
    middle_div.style.display="flex";
    login_div.style.display="flex";
    container.classList.add("change");
    navigation2.classList.add("change")
}
          
        })

const book = books.find(b => b.id === bookId);

const container_books = document.getElementById("book_detail");

if (!book) {
  container_books.innerHTML = "<p>Book not found.</p>";
} else {
  container_books.innerHTML = `
  <div class="img"><img src="${book.book_photo}" class="imgs"></div>
    <div class="details">
      <h1>${book.book_name}</h1>
      <p>${book.curriculum}</p>
      <p>${book.prev_description}</p>
      <p>PDF · ${book.size}</p>
    </div>
    <div class="down_read_btn">
      <a href="${book.file}" download>Download</a>
      <a href="${book.file}" target="_blank">Read Online</a>
      
    </div>
    `;
}

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (query === "") {
      searchResults.style.display = "none";
      return;
    }

    const matches = books.filter(book =>
      book.title.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = "<div>No results</div>";
    } else {
      matches.forEach(book => {
        const item = document.createElement("div");
        item.textContent = book.title;
        item.addEventListener("click", () => {
          window.location.href = `preview.html?id=${book.id}`;
        });
        searchResults.appendChild(item);
      });
    }

    searchResults.style.display = "block";
  });
}
