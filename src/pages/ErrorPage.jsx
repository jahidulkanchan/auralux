import React from 'react';
import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-dark text-white px-5">
      <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Oops! Page Not Found</h2>
      <p className="mb-6 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-light-dark border border-transparent px-6 py-3 rounded hover:border-light-orange transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
}
