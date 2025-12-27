import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg font-medium
        bg-gray-800 text-white
        dark:bg-yellow-400 dark:text-black
        transition-all
      "
    >
      {theme === "light" ?  "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
