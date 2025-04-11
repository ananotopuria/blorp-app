import { useState } from "react";
import redBlorp from "./../../assets/749a6e0c-bc3e-4aeb-af11-d17413fd9b10.png";
import greenBlorp from "./../../assets/d1e4ccd9-10ac-4f67-a1f0-07915b56d46f.png";
import baby from "./../../assets/unnamed12.png";
import grandfa from "./../../assets/unnamed.png"

function CreatePageComponents() {
  const [title, setTitle] = useState("");
  const [subtext, setSubtext] = useState("");
  const [generated, setGenerated] = useState(false);
  const [selectedImg, setSelectedImg] = useState(redBlorp);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && subtext) {
      setGenerated(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Create Your Custom Virus
      </h1>

      <form
        onSubmit={handleGenerate}
        className="w-full max-w-md flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Enter virus title"
          className="p-2 rounded border bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter subtext"
          className="p-2 rounded border bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 resize-none h-32"
          value={subtext}
          onChange={(e) => setSubtext(e.target.value)}
        />
        <div className="flex gap-4 justify-center">
          <img
            src={redBlorp}
            alt="Warning"
            className={`w-16 h-16 cursor-pointer border-2 rounded ${
              selectedImg === redBlorp ? "border-red-500" : "border-transparent"
            }`}
            onClick={() => setSelectedImg(redBlorp)}
          />
          <img
            src={greenBlorp}
            alt="Skull"
            className={`w-16 h-16 cursor-pointer border-2 rounded ${
              selectedImg === greenBlorp
                ? "border-red-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImg(greenBlorp)}
          />
          <img
            src={baby}
            alt="Skull"
            className={`w-16 h-16 cursor-pointer border-2 rounded ${
              selectedImg === baby
                ? "border-red-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImg(baby)}
          />
          <img
            src={grandfa}
            alt="Skull"
            className={`w-16 h-16 cursor-pointer border-2 rounded ${
              selectedImg === grandfa
                ? "border-red-500"
                : "border-transparent"
            }`}
            onClick={() => setSelectedImg(grandfa)}
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold p-2 rounded"
        >
          Get Link
        </button>
      </form>
      {generated && (
        <div className="mt-8 p-4 rounded border border-red-600 bg-red-100 dark:bg-zinc-800 flex flex-col items-center gap-4">
          <img src={selectedImg} alt="virus icon" className="w-16 h-16" />
          <p className="font-bold">Your link is ready:</p>
          <code className="text-sm break-all text-red-700 dark:text-red-300">
            https://blorp.app/fake-virus/{encodeURIComponent(title.trim())}
          </code>
        </div>
      )}
    </div>
  );
}

export default CreatePageComponents;
