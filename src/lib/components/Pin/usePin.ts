import { useEffect, useRef, useState } from "react";
import { PinProps } from "./DTOs";

const usePin = (props: PinProps) => {
  const { value = "", onChange, length } = props;

  const [pin, setPin] = useState<string>(value);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Create refs for each input box
  const inputRefs = useRef<Array<HTMLInputElement | null>>(new Array(length).fill(null));

  // Effect to call onChange whenever the pin changes
  useEffect(() => {
    if (onChange) {
      onChange(pin);
    }
  }, [pin, onChange]);

  // Automatically focus the active input box when activeIndex changes
  useEffect(() => {
    if (inputRefs.current[activeIndex]) {
      inputRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  // Handle Backspace key event
  const handleBackspace = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index >= 0) {
      const newPin = pin.split("");
      newPin[index] = ""; // Clear current box value
      setPin(newPin.join("")); // Update pin

      // Move focus to previous box if available
      if (index > 0) {
        setActiveIndex(index - 1);
      } else {
        setActiveIndex(0); // Keep focus on the first box
      }
    }
  };

  // Handle changes to individual text boxes (normal input)
  const handleTextBoxChange = (index: number) => (value: string) => {
    const newPinArray = pin.split("");
    newPinArray[index] = value; // Set the value in the correct position
    setPin(newPinArray.join("")); // Update pin state

    // Move focus to the next input if there is input and it's not the last box
    if (value && index < length - 1) {
      setActiveIndex(index + 1);
    }

    // If last input is entered, set the last index as the active one
    if (index === length - 1 && value) {
      setActiveIndex(length - 1); // Focus stays on the last input
    }
  };

  // Handle paste event
  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default paste behavior
    const pasteData = e.clipboardData.getData("text").slice(0, length); // Limit to pin length
    const filteredPaste = pasteData.replace(/[^0-9]/g, ""); // Only allow digits

    const newPinArray = pin.split("");
    filteredPaste.split("").forEach((char, index) => {
      if (index < length) {
        newPinArray[index] = char; // Set the characters from paste
      }
    });

    const newPin = newPinArray.join("");
    setPin(newPin); // Update pin state

    // Focus the last appropriate box after pasting
    const nextIndex = filteredPaste.length < length ? filteredPaste.length : length - 1;
    setActiveIndex(nextIndex);
  };

  // Determine if an input should be disabled
  const isDisabledInput = (index: number) => {
    // If pin is completely cleared, only the first box should be enabled
    if (!pin.trim() && index !== 0) {
      return true;
    }

    // Disable boxes that have already been filled
    if (index < activeIndex) {
      return true;
    }

    // Enable only the current box
    return index !== activeIndex;
  };

  return { pin, handleTextBoxChange, handleBackspace, handlePaste, inputRefs, isDisabledInput, activeIndex };
};

export { usePin };
