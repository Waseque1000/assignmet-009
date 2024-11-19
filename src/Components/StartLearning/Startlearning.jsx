import React, { useState } from "react";
import { GiSpeaker } from "react-icons/gi";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const StartLearning = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [wordStatus, setWordStatus] = useState({});
  const [completedLessons, setCompletedLessons] = useState({});
  const vocabulary = useLoaderData();

  // Group words by lesson
  const groupedByLesson = vocabulary.reduce((acc, word) => {
    if (!acc[word.lesson_no]) {
      acc[word.lesson_no] = [];
    }
    acc[word.lesson_no].push(word);
    return acc;
  }, {});

  const sortedLessons = Object.keys(groupedByLesson).sort((a, b) => a - b);

  // Function to handle word review status update
  const handleWordReview = (wordId) => {
    setWordStatus((prevStatus) => ({
      ...prevStatus,
      [wordId]: prevStatus[wordId] === "reviewed" ? "unreviewed" : "reviewed",
    }));
  };

  // Function to mark a lesson as complete
  const handleCompleteLesson = (lessonNo) => {
    const lessonWords = groupedByLesson[lessonNo];
    const allReviewed = lessonWords.every(
      (word) => wordStatus[word.id] === "reviewed"
    );

    if (allReviewed) {
      setCompletedLessons((prevCompleted) => ({
        ...prevCompleted,
        [lessonNo]: true,
      }));

      toast(`Lesson ${lessonNo} completed!`);
    } else {
      toast(
        "You need to review all words in this lesson before completing it."
      );
    }
  };

  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      {/* Lessons Card */}
      <div className="card bg-base-100 shadow-xl mb-6">
        <div className="card-body">
          <h2 className="card-title mb-3">Spanish Vocabulary Lessons</h2>
          <div className="flex flex-wrap gap-2">
            {sortedLessons.map((lessonNo) => (
              <button
                key={lessonNo}
                onClick={() => setSelectedLesson(lessonNo)}
                className={`btn ${
                  selectedLesson === lessonNo ? "btn-primary" : "btn-outline"
                }`}
              >
                Lesson {lessonNo}
                <span className="badge badge-sm ml-2">
                  {groupedByLesson[lessonNo].length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Lesson Content */}
      {selectedLesson && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <h2 className="card-title">Lesson {selectedLesson}</h2>
              <button
                onClick={() => setSelectedLesson(null)}
                className="btn btn-ghost btn-sm"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              {groupedByLesson[selectedLesson].map((word) => (
                <div
                  key={word.id}
                  className="card bg-base-200 flex flex-col md:flex-row gap-4 p-4"
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">{word.word}</h3>
                      <span
                        className={`badge ${
                          word.difficulty === "difficult"
                            ? "badge-error"
                            : word.difficulty === "medium"
                            ? "badge-warning"
                            : "badge-success"
                        }`}
                      >
                        {word.difficulty}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div>
                        <p className="text-sm opacity-70">Pronunciation:</p>
                        <div
                          className="btn"
                          onClick={() => {
                            pronounceWord(word.pronunciation);
                            handleWordReview(word.id);
                          }}
                        >
                          <GiSpeaker className="text-2xl text-red-700 mr-2" />
                        </div>
                        <p className="font-medium">{word.pronunciation}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Meaning:</p>
                        <p className="font-medium">{word.meaning}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">Part of Speech:</p>
                        <p className="font-medium">{word.part_of_speech}</p>
                      </div>
                      <div>
                        <p className="text-sm opacity-70">When to use:</p>
                        <p className="font-medium">{word.when_to_say}</p>
                      </div>
                    </div>

                    <div className="mt-2">
                      <p className="text-sm opacity-70">Example:</p>
                      <p className="font-medium italic">{word.example}</p>
                    </div>

                    {/* Complete Word Button */}
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleWordReview(word.id)}
                        className={`btn ${
                          wordStatus[word.id] === "reviewed"
                            ? "btn-success"
                            : "btn-outline"
                        }`}
                      >
                        {wordStatus[word.id] === "reviewed"
                          ? "Done"
                          : "Complete"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Complete Lesson Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => handleCompleteLesson(selectedLesson)}
                className={`btn btn-success ${
                  groupedByLesson[selectedLesson].every(
                    (word) => wordStatus[word.id] === "reviewed"
                  )
                    ? ""
                    : "btn-disabled"
                }`}
                disabled={groupedByLesson[selectedLesson].some(
                  (word) => wordStatus[word.id] !== "reviewed"
                )}
              >
                Complete Lesson
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartLearning;
