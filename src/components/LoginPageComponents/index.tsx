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
    <div className="min-h-screen flex flex-col items-center pt-[10rem] xl:pt-[20rem] bg-white dark:bg-blackish text-grey dark:text-lavender px-6">
      <h1 className="text-[3rem] lg:text-[5rem] font-extrabold mb-12 text-blueViolet dark:text-brightLavender">
        Login
      </h1>
      <form
        onSubmit={handleLogin}
        className="w-full max-w-lg flex flex-col gap-8"
      >
        <input
          type="email"
          placeholder="Email"
          className="p-5 text-xl rounded-xl border bg-gainsboro dark:bg-darkGrey dark:border-lighterGrey"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-5 text-xl rounded-xl border bg-gainsboro dark:bg-darkGrey dark:border-lighterGrey"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blueViolet hover:bg-brightLavender text-white dark:text-white text-[1.6rem] lg:text-[2rem] font-bold py-4 rounded-xl transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPageComponents;
