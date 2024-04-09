const useProfileImage = ({ alt }: { alt: string }): any => {
  let sentence = alt.trim();
  if (!sentence.length) return "";
  const words = sentence.split(" ");
  let Text = words.map((word) => word[0].toUpperCase()).join("");
  let profileText: string = Text.slice(0, 2);

  return { profileText };
};

export { useProfileImage };
