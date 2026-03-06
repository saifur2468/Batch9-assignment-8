import React, { useState, useEffect } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MainLayout = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('./card.json')
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const topApps = cards.slice(0, 8);

  return (
    <div className="container mx-auto px-4 py-12">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {topApps.map((app) => (
          <div
            key={app.id}
            className="border rounded-xl p-4 hover:shadow-lg transition-shadow bg-white flex flex-col items-center text-center"
          >

            <img
              src={app.image}
              alt={app.title}
              className="w-24 h-24 rounded-2xl mb-4 object-cover"
            />

            <h3 className="text-lg font-bold">{app.title}</h3>

            <p className="text-sm text-gray-500 flex items-center gap-1">
              {app.downloads.toLocaleString()} Downloads <FaDownload />
            </p>

            <div className="flex items-center mt-2 text-yellow-500">
              <span className="font-bold mr-1">{app.ratingAvg}</span>
              <CiStar />
            </div>

            <Link to={`/card-details/${app.id}`}>
              <button className="mt-3 bg-purple-600 text-white px-4 py-1 rounded-lg">
                View Details
              </button>
            </Link>

          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="/AllApps"
          className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          Show All
        </Link>
      </div>

    </div>
  );
};

export default MainLayout;