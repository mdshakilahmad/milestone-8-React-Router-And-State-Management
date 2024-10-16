import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  const [readBook, setReadBook] = useState([]); // Initialize as an empty array
  const [wishlistBook, setWishlistBook] = useState([]); // Initialize as an empty array

  const handleRead = (book) => {
    console.log("hello", book);
    const newBook = [...readBook, book]; // Spread existing books and add the new one

    const readindex = readBook.find((rdBook) => rdBook.bookId === book.bookId);
    if (readindex) {
      toast.error("You have Already Read This Book");
      return;
    }
    toast.success("Book Added to Read List");
    setReadBook(newBook);
  };

  const handleWishlist = (book) => {
    console.log("hello", book);

    const readindex = readBook.find((rdBook) => rdBook.bookId === book.bookId);
    if (readindex) {
      toast.error("You have Already Read This Book");
      return;
    }

    const newBook = [...wishlistBook, book]; // Spread existing books and add the new one

    const wishListIndex = wishlistBook.find(
      (wishBook) => wishBook.bookId === book.bookId
    );
    if (wishListIndex) {
      toast.error("You have Already WishList This Book");
      return;
    }

    toast.success("Book Added to WishList");
    setWishlistBook(newBook);
  };

  return (
    <div className="max-w-[1170px] mx-auto px-3">
      <ToastContainer />
      <Header />
      <Outlet
        context={{ handleRead, handleWishlist, readBook, wishlistBook }}
      />
    </div>
  );
};

export default Root;
