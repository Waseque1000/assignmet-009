// import React from "react";
// import { GiSpeaker } from "react-icons/gi";
// import { Link } from "react-router-dom";

// const Word = ({ words }) => {
//   const { id, word, pronunciation, meaning, part_of_speech, difficulty } =
//     words;
//   return (
//     <div className="card bg-blue-300 w-96 shadow-xl">
//       <figure></figure>
//       <div className="card-body">
//         <h2 className="card-title">{word}</h2>
//         <p>{meaning}</p>
//         <div className="card-actions justify-end">
//           <div className=" btn  ">
//             <GiSpeaker className="text-2xl"></GiSpeaker>
//             pronunciation
//           </div>
//           <Link to={`/details/${id}`} className="btn">
//             Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Word;

import React from "react";
import { GiSpeaker } from "react-icons/gi";
import { Link } from "react-router-dom";

const Word = ({ words }) => {
  const { id, word, pronunciation, meaning, part_of_speech, difficulty } =
    words;

  // Function to handle pronunciation
  const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="card bg-blue-300 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{word}</h2>
        <p>{meaning}</p>
        <div className="card-actions justify-end">
          {/* Pronunciation Button */}
          <div className="btn" onClick={() => pronounceWord(word)}>
            <GiSpeaker className="text-2xl mr-2" />
            Pronunciation
          </div>

          {/* Details Button */}
          <Link to={`/details/${id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Word;
