import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-auto bg-green-400 h-screen">
        <h2 className="mb-5 text-3xl text-blue-900">
          Oppps this page not found !!!!!
        </h2>
        <Link
          className="bg-blue-900 rounded-full text-xl text-white px-3 py-2"
          to={"/"}
        >
          Home page back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
