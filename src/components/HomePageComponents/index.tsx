import { useState } from "react";

// import DownloadCard from "../components/DownloadCard";
import { Link } from "react-router-dom";
import { getRandomContent } from "../../utils/fakeContents";

function HomePageComponents() {
  const [content] = useState(() => getRandomContent());
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p className="text-lg text-gray-400 mb-6 max-w-md text-center">
        {content.description}
      </p>
      <Link to="/downloads" className="mb-4 text-blue-400 underline">
        Go to Downloads
      </Link>
      <Link to="/login" className="text-sm text-gray-500 underline">
        Login to unlock more features
      </Link>
    </div>
  );
}

export default HomePageComponents;
