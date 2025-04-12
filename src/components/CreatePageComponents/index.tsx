import { useState } from "react";
import redBlorp from "./../../assets/749a6e0c-bc3e-4aeb-af11-d17413fd9b10.png";
import greenBlorp from "./../../assets/d1e4ccd9-10ac-4f67-a1f0-07915b56d46f.png";
import baby from "./../../assets/unnamed12.png";
import grandfa from "./../../assets/unnamed.png";

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
    <div className="min-h-screen flex flex-col items-center pt-[10rem] xl:md-[20rem] px-6 bg-white text-grey dark:bg-blackish dark:text-lavender">
      <h1 className="text-[3rem] lg:text-[5rem] font-bold mb-8 text-blueViolet dark:text-brightLavender text-center">
        Create Your Custom Virus
      </h1>

      <form
        onSubmit={handleGenerate}
        className="w-full max-w-xl lg:max-w-[50rem] flex flex-col gap-5"
      >
        <input
          type="text"
          placeholder="Enter virus title"
          className="p-3 text-[1.6rem] lg:text-[2rem] rounded border bg-gainsboro dark:bg-darkGrey dark:border-lighterGrey"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter subtext"
          className="p-3 text-[1.6rem] lg:text-[2rem] rounded border bg-gainsboro dark:bg-darkGrey dark:border-lighterGrey resize-none h-36"
          value={subtext}
          onChange={(e) => setSubtext(e.target.value)}
        />
        <div className="flex gap-5 justify-center">
          {[redBlorp, greenBlorp, baby, grandfa].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Option ${idx + 1}`}
              className={`w-20 h-20 xl:w-[10rem] xl:h-[10rem] cursor-pointer border-4 rounded-xl transition-all duration-150 ${
                selectedImg === img ? "border-red" : "border-transparent"
              }`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="bg-red hover:bg-pink text-white font-semibold py-3 text-lg lg:text-[1.8rem] rounded-lg transition duration-200"
        >
          Get Link
        </button>
      </form>

      {generated && (
        <div className="mt-10 p-6 rounded-xl border-2 border-red bg-lavender dark:bg-darkGrey flex flex-col items-center gap-4">
          <img src={selectedImg} alt="virus icon" className="w-20 h-20" />
          <p className="text-xl font-bold text-blueViolet dark:text-green">
            Your link is ready:
          </p>
          <code className="text-base break-all text-red dark:text-yellow text-center">
            https://blorp.app/fake-virus/{encodeURIComponent(title.trim())}
          </code>
        </div>
      )}
    </div>
  );
}

export default CreatePageComponents;
