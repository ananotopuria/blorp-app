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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Download the Desktop App</h1>

      <p className="mb-8 text-center max-w-md text-gray-700 dark:text-gray-300">
        This app simulates phishing experiences. Download it to continue.
      </p>

      {userOS === "windows" && (
        <a
          href="/downloads/blorp-windows.exe"
          download
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-center"
        >
          ⬇ Download for Windows
        </a>
      )}

      {userOS === "mac" && (
        <a
          href="/downloads/blorp-mac.dmg"
          download
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-center"
        >
          ⬇ Download for macOS
        </a>
      )}

      {userOS === "unknown" && (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            We couldn't detect your OS. Choose manually:
          </p>
          <div className="flex gap-4">
            <a
              href="/downloads/blorp-windows.exe"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Windows
            </a>
            <a
              href="/downloads/blorp-mac.dmg"
              download
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
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
