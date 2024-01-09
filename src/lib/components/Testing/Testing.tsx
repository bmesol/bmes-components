import React, { useState } from "react";
import { Toast, ToastVariants } from "../Toast/Toast";
import { TextBox } from "../TextBox/TextBox";
import { Button, ButtonVariants } from "../Button/Button";

const Testing = () => {
  const [input, setInput] = useState("");
  const [toastAlert, setToastAlert] = useState(false);
  const handleToastAlert = () => {
    if (input === "" || input.length < 10) {
      setToastAlert(true);
    } else {
      alert("Sign-In Successfully...!");
    }
  };
  return (
    <>
      <Toast
        variant={ToastVariants.DANGER}
        heading="Invalid login"
        message="Phone number is incorrect"
        showToast={toastAlert}
        onClose={() => setToastAlert(false)}
      />
      <div className="my-4">
        <TextBox
          label="Phone"
          length={10}
          regex="^[0-9]*$"
          placeholder="Enter your phone number"
          classNames="w-100"
          value={input}
          onChange={(inputValue: string) => { setInput(inputValue) }}
        />
      </div>
      <Button
        label="Sign in"
        variant={ButtonVariants.PRIMARY}
        onClick={handleToastAlert}
        classNames="w-100"
      />
    </>
  );
};

export default Testing;