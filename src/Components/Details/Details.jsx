import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const vocabulary = useLoaderData();
  const { id } = useParams();
  const word = vocabulary.find((item) => item.id === id);

  if (!word) {
    return <p>Word not found!</p>;
  }

  const {
    word: name,
    pronunciation,
    meaning,
    part_of_speech,
    difficulty,
    example,
  } = word;

  return (
    <div className="card bg-blue-300 w-96 shadow-xl m-auto">
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>
          <strong>Pronunciation:</strong> {pronunciation}
        </p>
        <p>
          <strong>Meaning:</strong> {meaning}
        </p>
        <p>
          <strong>Part of Speech:</strong> {part_of_speech}
        </p>
        <p>
          <strong>Difficulty:</strong> {difficulty}
        </p>
        <p>
          <strong>Example:</strong> {example}
        </p>
      </div>
    </div>
  );
};

export default Details;
