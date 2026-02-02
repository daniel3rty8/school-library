// search
export function searchFilter(books, query) {
  if (!query) return books;

  const q = query.toLowerCase();

  return books.filter(book =>
    book.book_name.toLowerCase().includes(q)
  );
}
