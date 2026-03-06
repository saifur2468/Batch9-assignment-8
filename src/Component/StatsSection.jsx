import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      label: 'Total Downloads',
      value: '29.6M',
      growth: '21% More Than Last Month',
    },
    {
      label: 'Total Reviews',
      value: '906K',
      growth: '46% More Than Last Month',
    },
    {
      label: 'Active Apps',
      value: '132+',
      growth: '31 More Will Launch',
    },
  ];

  return (
    <section className="bg-[#8b5cf6] py-20 px-6 text-white text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-xl md:text-5xl font-bold mb-16 tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm md:text-base font-medium opacity-80 mb-4">
                {stat.label}
              </p>
              <span className="text-xl md:text-xl font-extrabold mb-4">
                {stat.value}
              </span>
              <p className="text-sm md:text-base opacity-70">
                {stat.growth}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;