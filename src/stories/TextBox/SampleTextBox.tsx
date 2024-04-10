import { Button, ButtonVariants, TextBox } from "../../lib";
import React, { useState } from "react";
import { Search } from "lucide-react";

const SampleTextBox = () => {
  const [name, setName] = useState("");

  const handleButtonClick = () => {
    if (name.length) {
      alert("Your Name : " + name);
    } else {
      alert("Please enter your name");
    }
  };

  return (
    <>
      <TextBox
        label="Name"
        value={name}
        onChange={(inputValue: string) => setName(inputValue)}
        placeholder="Enter name"
        regex="^[a-zA-Z\s]*$"
        length={25}
      />
      <Button
        icon={<Search />}
        label="Show My Name"
        variant={ButtonVariants.WARNING}
        onClick={handleButtonClick}
        classNames="mt-4"
      />
    </>
  );
};

export { SampleTextBox };
