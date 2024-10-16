import { Link } from "react-router-dom";
import bannerBook from "../../assets/images/bannder-book.png";

const Banner = () => {
  return (
    <div className="flex justify-between sm:gap-9 md:gap-12 lg:gap-20 items-center bg-base-200 px-4 py-3 sm:px-8 sm:py-6 md:px-11 md:py-8  lg:px-32 lg:py-20 rounded-xl">
      <div>
        <h2 className="font-bold text-base sm:text-2xl md:text-3xl lg:text-5xl mb-12 max-w-lg lg:leading-snug">
          Books to freshen up your bookshelf
        </h2>
        <Link to={"/listBooks"} className="btn text-white btn-success">
          View The List
        </Link>
      </div>
      <div>
        <img className="max-w-full" src={bannerBook} alt="bannerBook-img" />
      </div>
    </div>
  );
};

export default Banner;
