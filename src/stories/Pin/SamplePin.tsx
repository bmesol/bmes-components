import { Pin, Button, ButtonVariants } from "../../lib";
import React, { useState } from "react";
import { Eye } from "lucide-react";

const SamplePin = () => {
  const [pin, setPin] = useState("");

  const handleButtonClick = () => {
    if (pin.length) {
      alert("Your Pin : " + pin);
    } else {
      alert("Please enter your pin");
    }
  };

  return (
    <div className="w-25">
      <Pin
        label="Pin"
        length={4}
        value={pin}
        onChange={(inputValue: string) => setPin(inputValue)}
      />
      <div className="mt-4 text-center">
        <Button
          icon={<Eye />}
          label="Show My Pin"
          variant={ButtonVariants.DANGER}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export { SamplePin };
