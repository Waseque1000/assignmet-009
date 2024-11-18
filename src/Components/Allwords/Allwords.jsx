import { useLoaderData } from "react-router-dom";
import Word from "../Word/Word";

const Allwords = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
      {data.map((words) => (
        <Word key={words.id} words={words}></Word>
      ))}
    </div>
  );
};

export default Allwords;
