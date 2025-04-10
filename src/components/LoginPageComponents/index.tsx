import { useNavigate } from "react-router-dom";
import { useState } from "react";
function LoginPageComponents() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Captured credentials:", { email, password });

    navigate("/create");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 text-black dark:text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-red-400"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPageComponents;
