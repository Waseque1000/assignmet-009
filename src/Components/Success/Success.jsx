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
    <div className="bg-white p-6 my-20 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Learning Success Metrics
      </h2>
      <div className="mx-30 grid grid-cols-2 md:grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-blue-50 rounded-lg transition-all hover:shadow-md"
          >
            <metric.icon className="w-12 h-12 text-blue-600 mb-2" />
            <div className="text-3xl font-bold text-blue-800">
              <CountUp end={metric.count} />
            </div>
            <p className="text-sm text-gray-600 mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Success;
