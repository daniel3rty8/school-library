import { books} from "./data.js";
const middle_div=document.getElementById("middle_div");
const login_div = document.getElementById("login_div");
const books_box=document.getElementById("books_box");
const typeButtons =document.querySelectorAll("#navigation2 .btn");
const gradeSelect = document.getElementById("grade-level");  
const navigation2=document.getElementById("navgarion2");

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

let selectedType = "All";

function displayboxes(bookList){
  books_box.innerHTML="";

  if (bookList.length === 0) {
    books_box.innerHTML = "No books found.";
    return;
  }
  bookList.forEach(item=>{
    const book = document.createElement("a");
    book.href = `preview.html?id=${item.id}`;
    book.className = "book-card";
    book.innerHTML = `
    <div class="image_box">
      <img src="${item.book_photo}" class="imgs">
    </div>
    <div class="object">
      <div class="books_name">${item.book_name}</div>
      <div class="books_grade">Grade ${item.grade_level}</div>
      <div class="books_dicription">
        ${item.dicription}
      </div>
    </div>
  `;
  books_box.appendChild(book);
  })
}


function applyFilters(){
  const selectgrade=gradeSelect.value
const filteredBooks = books.filter(book => {
    const gradeSel =
      selectgrade === "All" ||
      String(book.grade_level) === selectgrade;
    const typeMatch =
      selectedType === "All" ||
      book.type === selectedType;

    return gradeSel && typeMatch;  
  });
    displayboxes(filteredBooks);
}

gradeSelect.addEventListener("change", applyFilters);

typeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedType = btn.dataset.type;
    applyFilters();
  });
});


applyFilters();

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
      book.book_name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
      searchResults.innerHTML = "<div>No results</div>";
    } else {
      matches.forEach(book => {
        const item = document.createElement("div");
        item.textContent = book.book_name;
        item.addEventListener("click", () => {
          window.location.href = `preview.html?id=${book.id}`;
        });
        searchResults.appendChild(item);
      });
    }

    searchResults.style.display = "block";
  });
}

let ticking = false

window.addEventListener("scroll",()=>{
  if(!ticking){
    window.requestAnimationFrame(()=>{
       const currentScrollPos = window.scrollY;
       const nav = document.getElementById("navigation1")
      if (currentScrollPos <= 20 ) {
        nav.style.backgroundColor="rgb(218, 219, 146)"
      } 
      else {
        nav.style.backgroundColor="rgba(208, 209, 135, 1)"
   
      }

      ticking = false;
    });
      ticking = true;
  }
})
