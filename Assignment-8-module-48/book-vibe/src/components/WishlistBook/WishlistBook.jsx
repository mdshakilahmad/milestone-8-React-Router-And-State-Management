import { CiLocationOn } from "react-icons/ci";
import { IoIosMan } from "react-icons/io";
import { RiPagesLine } from "react-icons/ri";

const WishlistBook = ({ book }) => {
  const {
    bookName,
    image,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="border p-6 my-8 rounded-2xl">
      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="bg-slate-100 p-12 rounded-2xl w-full lg:w-1/5">
          <img className="mx-auto" src={image} alt="book-img" />
        </div>
        <div className="w-full lg:w-4/5 grid grid-cols-1 space-y-3">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <h5 className="font-medium">By: {author}</h5>
          <div>
            <p className="inline-block">
              <b className="mr-2">Tag</b>
              <button className="btn btn-sm text-success bg-yellow-50 mr-3">
                #{tags[0]}
              </button>
              <button className="btn btn-sm text-success bg-yellow-50 mr-3">
                #{tags[1]}
              </button>
            </p>
            <span className="inline-flex items-center mt-3 sm:mt-0">
              <CiLocationOn className="mr-1" /> Year of Publishing:{" "}
              {yearOfPublishing}
            </span>
          </div>
          <div className="border-b pb-5">
            <span className="inline-flex items-center mr-4">
              <IoIosMan className="mr-1" /> Publisher: {publisher}
            </span>
            <span className="inline-flex items-center">
              {" "}
              <RiPagesLine className="mr-1" /> Page {totalPages}
            </span>
          </div>
          <div className="pt-4">
            <button className="py-2 px-5 rounded-full text-blue-600 bg-blue-100 mr-4">
              Category: {category}
            </button>
            <button className="py-2 px-5 rounded-full text-orange-700 bg-orange-100 mr-4 mt-3 sm:mt-0">
              Rating: {rating}
            </button>
            <button className="py-2 px-5 rounded-full text-white bg-green-600 mr-4 mt-3 sm:mt-0">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WishlistBook;
