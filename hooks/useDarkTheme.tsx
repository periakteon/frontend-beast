import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => {
      false;
    };
  }, [resolvedTheme]);

  return isDark;
};

export default useDark;
