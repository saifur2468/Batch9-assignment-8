import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
     
      <h1 className="text-9xl font-black text-purple-200 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-purple-600 font-bold">
          Oops!
        </span>
      </h1>
      
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">
        Page Not Found
      </h2>
      
      <p className="text-gray-500 max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-200"
      >
        Back to Home
      </Link>
      
     
      <p className="mt-10 text-xs text-gray-400 italic">
        Error details: {error?.statusText || error?.message}
      </p>
    </div>
  );
};

export default ErrorPage;