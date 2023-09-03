import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { SiDarkreader } from "react-icons/si";
const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  /* SiDarkreader
  FaLightbulb
  */

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <FaLightbulb className="text-orange-500 text-2xl" />
      ) : (
        <SiDarkreader className="text-yellow-500 text-2xl" />
      )}
    </button>
  );
};

export default ThemeChanger;
