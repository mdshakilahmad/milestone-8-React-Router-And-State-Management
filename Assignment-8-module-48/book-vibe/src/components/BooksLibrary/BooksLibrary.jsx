import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksLibrary = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="py-32">
      <h2 className="text-4xl font-bold pb-9 text-center">Books</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default BooksLibrary;
