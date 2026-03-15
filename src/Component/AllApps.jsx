import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import { CiStar, CiSearch } from 'react-icons/ci';
import errorimg from '../assets/error-404.png'
import { FaDownload } from 'react-icons/fa';
const AllApps = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
//   const navigate = useNavigate();

  useEffect(() => {
    fetch('./card.json')
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error:", err));
  }, []);

//  Search Function 
  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

//   Filtar Function 
  const sortedApps = [...filteredApps].sort((a, b) => {
    if (sortOrder === "High-Low") return b.downloads - a.downloads;
    if (sortOrder === "Low-High") return a.downloads - b.downloads;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 min-h-screen">
   
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Explore All Apps</h2>
        <p className="text-gray-500 mt-2">Discover the best tools and games from our full collection</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 bg-gray-50 p-6 rounded-2xl">
    
        <p className="text-lg font-semibold text-gray-700">
          Total Apps: <span className="text-purple-600">{sortedApps.length}</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
         
          <div className="relative flex items-center">
            <CiSearch className="absolute left-3 text-xl text-gray-400" />
            <input
              type="text"
              placeholder="Search apps by title..."
              className="pl-10 pr-4 py-2 border rounded-xl w-full sm:w-72 focus:ring-2 focus:ring-purple-400 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
        
          <select 
            className="border p-2 rounded-xl bg-white outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Downloads</option>
            <option value="High-Low">High to Low</option>
            <option value="Low-High">Low to High</option>
          </select>
        </div>
      </div>

        {sortedApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedApps.map((app) => (
            <div 
              key={app.id} 
 className="group border border-gray-100 p-5 rounded-3xl hover:shadow-2xl transition-all cursor-pointer bg-white flex flex-col items-center"
            >
              <div className="relative mb-4">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-24 h-24 rounded-3xl object-cover shadow-md group-hover:scale-105 transition-transform" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 text-center truncate w-full">
                {app.title}
              </h3>
              <p className="text-xs text-purple-500 font-semibold mb-3 uppercase tracking-wider">
                {app.companyName}
              </p>

              <div className="w-full flex justify-between items-center mt-auto border-t pt-4">
                <div className="text-left flex gap-2">
                  <p className="text-[10px] text-gray-400 uppercase"><FaDownload></FaDownload></p>
                  <p className="text-sm font-bold text-gray-700">{app.downloads.toLocaleString()}</p>
                </div>
                <div className="text-right flex flex-col items-end">
                  <p className="text-[10px] text-gray-400 uppercase">Rating</p>
                  <div className="flex items-center text-yellow-500 font-bold">
                    <span>{app.ratingAvg}</span>
                    <CiStar className="ml-1" />
                  </div>
                </div>
                {/* {`/product/${product_id}`} */}
              <Link to={`/card-details/${app.id}`}>
                <button className="mt-3 bg-purple-600 text-white px-4 py-1 rounded-lg">view details</button>
               </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        <div className="text-center py-24 bg-red-50 rounded-3xl border-2 border-dashed border-red-100">
          <h3 className="text-3xl text-red-500 font-black mb-2">No App Found!</h3>
         <img className='mx-auto' src={errorimg} alt="" />
          <p className="text-gray-500">We couldn't find any app matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default AllApps;