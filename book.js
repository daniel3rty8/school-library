export function displayboxes(bookList){
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
        ${item.home_dicription}
      </div>
    </div>
  `;
  books_box.appendChild(book);
  })
}
