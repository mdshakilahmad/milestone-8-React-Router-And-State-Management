import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // console.log(book);
  const { bookId, image, tags, bookName, author, category, rating } = book;

  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-100 shadow-sm h-full p-6 border">
          <figure className="bg-base-200 p-5 rounded-xl flex-grow-1">
            <img src={image} alt="book-img" />
          </figure>
          <div className="card-body">
            <div>
              <button className="btn btn-sm text-success bg-yellow-50 mr-3">
                {tags[0]}
              </button>
              <button className="btn btn-sm text-success bg-yellow-50">
                {tags[1]}
              </button>
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p className="border-b border-dashed pb-4 font-medium">
              By: {author}
            </p>
            <div className="flex justify-between">
              <p>{category}</p>
              <p className="text-right flex items-center justify-end">
                {rating} <CiStar className="inline-flex items-center ml-1" />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.array,
};
export default Book;
