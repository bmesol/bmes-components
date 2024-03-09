import { useEffect, useState } from "react";

const useModelPopup = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQueryList = window.matchMedia(query);

    const handleChange = (event: MediaQueryListEvent | MediaQueryList) => {
      if ("matches" in event) {
        setMatches(event.matches);
      }
    };

    handleChange(mediaQueryList); // Initial check

    const mediaQueryListener = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      if ("matches" in event) {
        setMatches(event.matches);
      }
    };

    mediaQueryList.addEventListener("change", mediaQueryListener);

    return () => {
      mediaQueryList.removeEventListener("change", mediaQueryListener);
    };
  }, [query]);

  return matches;
};

export { useModelPopup };
