import React, { useEffect, useState } from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const Installation = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setApps(data);
  }, []);

  // Uninstall Function
  const handleUninstall = (id) => {
    const updatedApps = apps.filter(app => app.id !== id);
    setApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Installed Apps</h2>

      {apps.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
          <p className="text-gray-500 text-lg">No apps installed yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {apps.map((app) => (
            <div 
              key={app.id} 
              className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">
                    {app.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <FaDownload className="text-[10px]" /> {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-orange-500 font-medium">
                      <FaStar className="text-[10px]" /> {app.ratingAvg}
                    </span>
                    <span>{app.size || "258 MB"}</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Action Button */}
              <button 
                onClick={() => handleUninstall(app.id)}
                className="bg-[#00d094] hover:bg-[#00b37e] text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;