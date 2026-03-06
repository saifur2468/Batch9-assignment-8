import React, { useEffect, useState } from 'react';

const Installation = () => {

  const [apps, setApps] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("installedApps")) || [];

    setApps(data);

  }, []);

  return (

    <div className="max-w-5xl mx-auto py-10 px-4">

      <h2 className="text-3xl font-bold text-center mb-8">
        Installed Apps
      </h2>

      {apps.length === 0 ? (

        <p className="text-center text-gray-500">
          No Apps Installed Yet
        </p>

      ) : (

        <table className="table-auto w-full border">

          <thead className="bg-gray-200">

            <tr>

              <th className="p-3 border">Image</th>
              <th className="p-3 border">App Name</th>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Downloads</th>

            </tr>

          </thead>

          <tbody>

            {apps.map((app, index) => (

              <tr key={index} className="text-center">

                <td className="border p-2">

                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-12 mx-auto"
                  />

                </td>

                <td className="border p-2">{app.title}</td>

                <td className="border p-2">{app.companyName}</td>

                <td className="border p-2">{app.downloads}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>

  );
};

export default Installation;