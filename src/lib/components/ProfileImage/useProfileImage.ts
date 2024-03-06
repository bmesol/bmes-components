const useProfileImage = ({ alt }: { alt: string }) => {
  const words = alt.trim().split(" ");
  let profileText = "";
  if (!(alt === "")) {
    if (words.length >= 2) {
      const firstLetter = words[0][0];
      const secondLetter = words[1][0];
      profileText = (firstLetter + secondLetter).toUpperCase();
    } else if (words.length >= 1) {
      profileText = words[0][0].toUpperCase();
    }
  }

  return {
    profileText,
  };
};

export { useProfileImage };
