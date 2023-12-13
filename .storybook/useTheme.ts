// --- Custom hook for setting the theme in Storybook ---

import { useEffect, useGlobals } from "@storybook/addons";

export const useTheme = (StoryFn: any) => {
  const [{ theme }] = useGlobals();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return StoryFn();
};