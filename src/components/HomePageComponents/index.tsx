import { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomContent } from "../../utils/fakeContents";

function HomePageComponents() {
  const [content] = useState(() => getRandomContent());

  return (
    <div className="min-h-screen bg-white text-grey dark:bg-blackish dark:text-lavender flex flex-col items-center justify-start pt-[20rem] p-6">
      <h1 className="text-[3rem] lg:text-[5rem] font-bold mb-6 text-blueViolet dark:text-brightLavender">
        {content.title}
      </h1>
      <p className="text-[1.6rem] lg:text-[2rem] mb-8 max-w-xl text-center text-lightGrey dark:text-lighterGrey">
        {content.description}
      </p>

      <Link
        to="/downloads"
        className="mb-5 text-[2rem] lg:text-[3rem] text-red dark:text-green underline font-semibold"
      >
        Go to Downloads
      </Link>

      <Link
        to="/login"
        className=" text-darkerGrey dark:text-gainsboro underline text-base lg:text-[1.6rem]"
      >
        Login to unlock more features
      </Link>
    </div>
  );
}

export default HomePageComponents;
