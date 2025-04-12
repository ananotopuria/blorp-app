import { useEffect, useState } from "react";
import { getUserOS } from "../../utils/getUserOS";

function DownloadPage() {
  const [userOS, setUserOS] = useState<"windows" | "mac" | "unknown">(
    "unknown"
  );

  useEffect(() => {
    setUserOS(getUserOS());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start  pt-[20rem] px-6 bg-white text-grey dark:bg-blackish dark:text-lavender">
      <h1 className="text-[3rem] lg:text-[5rem] font-bold mb-8 text-blueViolet dark:text-brightLavender text-center">
        Download the Desktop App
      </h1>

      <p className="text-[1.6rem] lg:text-[1.8rem] mb-10 text-center max-w-xl text-lightGrey dark:text-lighterGrey">
        This app simulates phishing experiences. Download it to continue.
      </p>

      {userOS === "windows" && (
        <a
          href="/downloads/blorp-windows.exe"
          download
          className="bg-blueViolet hover:bg-brightLavender text-white dark:text-black text-lg font-semibold px-8 py-4 rounded-lg transition duration-200"
        >
          ⬇ Download for Windows
        </a>
      )}

      {userOS === "mac" && (
        <a
          href="/downloads/blorp-mac.dmg"
          download
          className="bg-green hover:bg-yellow text-black text-lg font-semibold px-8 py-4 rounded-lg transition duration-200"
        >
          ⬇ Download for macOS
        </a>
      )}

      {userOS === "unknown" && (
        <div className="flex flex-col gap-5 items-center">
          <p className="text-base text-darkerGrey dark:text-gainsboro">
            We couldn't detect your OS. Choose manually:
          </p>
          <div className="flex gap-6">
            <a
              href="/downloads/blorp-windows.exe"
              download
              className="bg-blueViolet hover:bg-brightLavender text-white dark:text-black text-base font-semibold px-6 py-3 rounded-lg"
            >
              Windows
            </a>
            <a
              href="/downloads/blorp-mac.dmg"
              download
              className="bg-green hover:bg-yellow text-black text-base font-semibold px-6 py-3 rounded-lg"
            >
              macOS
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DownloadPage;
