import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center px-8 py-12 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
