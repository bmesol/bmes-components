import { useEffect, useGlobals } from "@storybook/addons";

export const useTheme = (StoryFn: any) => {
  const [{ theme }] = useGlobals();

  useEffect(() => {
    //document.body refers to body tag inside iframe#storybook-preview-iframe
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return StoryFn();
};