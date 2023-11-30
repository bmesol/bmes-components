import { useEffect, useGlobals } from "@storybook/addons";

// --- Custom hook for setting the theme in Storybook ---
export const useTheme = (StoryFn: any) => {
  const [{ theme }] = useGlobals();

  useEffect(() => {
    //document.body refers to body tag inside iframe#storybook-preview-iframe
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return StoryFn();
};