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
  className="bg-gray-50 border rounded-2xl p-4 hover:shadow-lg transition w-full"
>

 
  <div className="bg-gray-200 rounded-xl h-40 w-full mb-4">
<img
  src={app.image}
  alt={app.title}
  className="w-full h-40 object-cover rounded-xl mb-4"
/>

  </div>

 
  <h3 className="text-lg font-semibold text-gray-800 mb-3">
    {app.title}
  </h3>

 
  <div className="flex justify-between items-center">

    <p className="flex items-center gap-1 bg-green-100 text-green-600 px-3 py-1 rounded-md text-sm">
      <FaDownload /> {app.downloads}
    </p>

    <p className="flex items-center gap-1 bg-orange-100 text-orange-500 px-3 py-1 rounded-md text-sm">
      <CiStar /> {app.ratingAvg}
    </p>

  </div>

 
  <Link to={`/card-details/${app.id}`}>
    <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
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