import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import toast, { Toaster } from 'react-hot-toast';
import { FaDownload, FaStreetView } from 'react-icons/fa';

const CardDetailes = () => {

  const { id } = useParams();
  const allData = useLoaderData();

  const [isInstalled, setIsInstalled] = useState(false);

  const dataArray = Array.isArray(allData) ? allData : [];
  const app = dataArray.find((item) => item.id === parseInt(id));

  
  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
      const exist = installedApps.find((item) => item.id === app.id);

      if (exist) {
        setIsInstalled(true);
      }
    }
  }, [app]);

  if (!app) {
    return (
      <div className="text-center py-20 text-red-500 font-bold">
        App Not Found!
      </div>
    );
  }

  const handleInstall = () => {

    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];

    const exist = installedApps.find((item) => item.id === app.id);

    if (!exist) {

      installedApps.push(app);

      localStorage.setItem('installedApps', JSON.stringify(installedApps));

      setIsInstalled(true);

      toast.success(`${app.title} Installed Successfully!`);
    } 
    else {
      toast.error("Already Installed!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <Toaster position="top-center" />

    
      <div className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-3xl shadow-sm border mb-12">

        <img
          src={app.image}
          alt={app.title}
          className="w-48 h-48 rounded-[2rem] shadow-xl object-cover"
        />

        <div className="flex-1 text-center md:text-left">

          <h1 className="text-4xl font-black text-gray-800 mb-2">
            {app.title}
          </h1>

          <p className="text-purple-500 font-bold mb-4">
            {app.companyName}
          </p>

          <p className="mb-4">{app.description}</p>

          <p className="flex items-center gap-2 mb-2">
            <FaDownload /> {app.downloads}
          </p>

          <p className="flex items-center gap-2 mb-4">
            <FaStreetView /> {app.reviews}
          </p>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`px-10 py-3 rounded-xl font-bold shadow-lg transition-all
            ${isInstalled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>

        </div>
      </div>

     

      <div className="bg-gray-50 p-6 rounded-3xl border mb-10">

        <h3 className="text-xl font-bold mb-6">
          Rating Distribution
        </h3>

        <div className="h-[300px] w-full">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={app.ratings}>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar dataKey="count" fill="#8b5cf6" radius={[4,4,0,0]} />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default CardDetailes;