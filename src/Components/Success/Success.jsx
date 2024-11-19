import React, { useState, useEffect } from "react";
import { Users, Book, FileText, Languages } from "lucide-react";

const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / 50));
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Success = () => {
  const metrics = [
    {
      icon: Users,
      count: 45670,
      label: "Total Users",
    },
    {
      icon: Book,
      count: 1250,
      label: "Lessons Completed",
    },
    {
      icon: Languages,
      count: 5420,
      label: "Vocabulary Words Learned",
    },
    {
      icon: FileText,
      count: 890,
      label: "Tutorials Finished",
    },
  ];

  return (
    <div className="bg-white px-4 py-10 my-20 rounded-lg shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-blue-700">
        Learning Success Metrics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-blue-50 rounded-lg transition-all hover:shadow-lg"
          >
            <metric.icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
            <div className="text-2xl sm:text-3xl font-bold text-blue-800">
              <CountUp end={metric.count} />
            </div>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
