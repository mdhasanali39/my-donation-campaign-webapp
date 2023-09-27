import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <h2 className="text-7xl font-bold text-red-500 mb-5">{error.status}</h2>
      <h3 className="font-semibold text-2xl">Oops!! Page not Found</h3>
      <h4 className="font-semibold">
        The page you are looking for does not exist
      </h4>

      <Link to={'/'}>
        <button className="px-5 py-3 bg-gray-700 rounded-lg text-white font-semibold mt-5">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
