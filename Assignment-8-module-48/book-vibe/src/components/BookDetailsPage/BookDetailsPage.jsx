import { useLoaderData, useOutletContext, useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const data = useOutletContext();
  // console.log(data);
  const { handleRead, handleWishlist } = data;

  const books = useLoaderData();
  // console.log(books[0]);
  // console.log(books);
  const { bookId } = useParams();
  // console.log(bookId);
  const idInt = parseInt(bookId);
  // console.log(idInt);
  const book = books.find((book) => book.bookId === idInt);
  // console.log(book);

  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 pb-12">
      <div className="bg-slate-100 h-full rounded-2xl">
        <div className="flex items-center h-full p-8">
          <img className="max-w-full mx-auto" src={image} alt="book-img" />
        </div>
      </div>
      <div className="grid grid-cols-1 space-y-4">
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <h5 className="font-medium">By : {author}</h5>
        <hr />
        <p>{category}</p>
        <hr />
        <p>
          <b>review:</b> {review}
        </p>
        <p>
          <b className="mr-2">Tag</b>
          <button className="btn btn-sm text-success bg-yellow-50 mr-3">
            #{tags[0]}
          </button>
          <button className="btn btn-sm text-success bg-yellow-50">
            #{tags[1]}
          </button>
        </p>
        <hr />

        <p className="flex justify-between">
          <span className="w-2/4 text-gray-500 font-medium">
            Number of Pages:
          </span>
          <span className="w-7/12 sm:w-3/4 font-bold">{totalPages}</span>
        </p>
        <p className="flex justify-between">
          <span className="w-2/4 text-gray-500 font-medium">Publisher:</span>{" "}
          <span className="w-7/12 sm:w-3/4 font-bold">{publisher}</span>
        </p>
        <p className="flex justify-between">
          <span className="w-2/4 text-gray-500 font-medium">
            Year of Publishing:
          </span>
          <span className="w-7/12 sm:w-3/4 font-bold">{yearOfPublishing}</span>
        </p>
        <p className="flex justify-between">
          <span className="w-2/4 text-gray-500 font-medium">Rating:</span>{" "}
          <span className="w-7/12 sm:w-3/4 font-bold">{rating}</span>
        </p>

        <div>
          <button
            onClick={() => handleRead(book)}
            className="btn border-slate-300 btn-outline mr-4"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(book)}
            className="btn btn-info text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
