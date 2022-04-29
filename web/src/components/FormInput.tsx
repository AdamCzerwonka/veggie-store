import React, { useState } from "react";

const FormInput: React.FC<FormInputProps> = ({
  fieldName,
  regex,
  inputHandler,
  propName,
}) => {
  const [touched, setTouched] = useState(false);
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (!touched) {
      setTouched(true);
    }

    if (!regex.test(value)) {
      setIsValid(false);
      if (propName) {
        inputHandler(propName, value, false);
      } else {
        inputHandler(fieldName, value, false);
      }
    } else {
      setIsValid(true);
      if (propName) {
        inputHandler(propName, value, true);
      } else {
        inputHandler(fieldName, value, true);
      }
    }
  };

  return (
    <div className="input__wrapper">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        className={touched ? (isValid ? "correct" : "error") : ""}
      />
      <span>{fieldName}</span>
    </div>
  );
};

interface FormInputProps {
  fieldName: string;
  regex: RegExp;
  inputHandler: (name: string, value: string, isValid: boolean) => void;
  propName?: string;
}

export default FormInput;
