import { useState } from "react";
function CreatePageComponents() {
  const [title, setTitle] = useState("");
  const [subtext, setSubtext] = useState("");
  const [generated, setGenerated] = useState(false);
  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && subtext) {
      setGenerated(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Virus</h1>

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
        <input
          type="text"
          placeholder="Enter subtext"
          className="p-2 rounded border bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700"
          value={subtext}
          onChange={(e) => setSubtext(e.target.value)}
        
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold p-2 rounded"
        >
          Get Link
        </button>
      </form>

      {generated && (
        <div className="mt-8 p-4 rounded border border-red-600 bg-red-100 dark:bg-zinc-800">
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
