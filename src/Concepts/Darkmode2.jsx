import { useEffect, useState } from "react";

export default function Darkmode2() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <h1 className="text-2xl">Hello, Tailwind Dark Mode</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}
