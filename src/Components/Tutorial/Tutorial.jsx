import React, { useState } from "react";
import { Play, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Tutorial = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const tutorials = [
    {
      id: "1",
      title: "Beginner Spanish Conversation",
      videoId: "DAp_v7EH9AA",
      description: "Learn basic Spanish conversation skills",
    },
    {
      id: "2",
      title: "Essential Spanish Phrases",
      videoId: "nE178FMQ1MQ",
      description: "Most common Spanish phrases you need to know",
    },
    {
      id: "3",
      title: "Spanish Numbers 1-100",
      videoId: "Z5Dglt6ggDE",
      description: "Master counting in Spanish",
    },
    {
      id: "4",
      title: "Daily Spanish Vocabulary",
      videoId: "6_5FnCLLYoA",
      description: "Essential words for daily life",
    },
    {
      id: "5",
      title: "Spanish Grammar Basics",
      videoId: "QN03bIu4kY8",
      description: "Fundamental grammar rules explained",
    },
    {
      id: "6",
      title: "Spanish Pronunciation Guide",
      videoId: "Sh7MLrbxH2E",
      description: "Perfect your Spanish accent",
    },
    {
      id: "7",
      title: "Common Spanish Verbs",
      videoId: "WsmOM7Ts82A",
      description: "Most used Spanish verbs and conjugations",
    },
    {
      id: "8",
      title: "Spanish Tenses Overview",
      videoId: "tU9WdAlk8zw",
      description: "Understand and practice Spanish verb tenses",
    },
  ];

  const handleStartLesson = () => {
    console.log("Navigate to start lesson");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Spanish Language Tutorial
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Video Section */}
        <div className="space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${tutorials[activeVideo].videoId}?autoplay=1`}
              title={tutorials[activeVideo].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="bg-white rounded-lg shadow p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {tutorials[activeVideo].title}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {tutorials[activeVideo].description}
            </p>
          </div>
        </div>

        {/* List Section */}
        <div className="space-y-6">
          <div className="grid gap-3">
            {tutorials.map((tutorial, index) => (
              <button
                key={tutorial.id}
                className={`w-full text-left p-3 sm:p-4 rounded-lg flex items-start gap-3 transition-colors
                  ${
                    activeVideo === index
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200"
                  }`}
                onClick={() => setActiveVideo(index)}
              >
                <Play
                  className={`w-5 h-5 ${
                    activeVideo === index ? "text-white" : "text-gray-600"
                  }`}
                />
                <div>
                  <div className="font-medium text-sm sm:text-base">
                    {tutorial.title}
                  </div>
                  <div
                    className={`text-xs sm:text-sm ${
                      activeVideo === index ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {tutorial.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <Link to="/learning">
            <button
              onClick={handleStartLesson}
              className="w-full py-4 px-3 sm:py-6 sm:px-4 text-base sm:text-lg bg-blue-400 hover:bg-blue-700 text-black hover:text-white rounded-lg
                flex items-center justify-center gap-2 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Learn Vocabularies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
