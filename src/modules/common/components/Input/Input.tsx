import React, { ChangeEvent, useRef } from "react";

type Props = {
  handleChange: (value: string) => void;
  placeholder: string;
};

const Input: React.FC<Props> = ({ handleChange, placeholder }: Props) => {
  const currentSearchTerm = useRef<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    currentSearchTerm.current = e.target.value;

    setTimeout(() => {
      if (currentSearchTerm.current === value) {
        handleChange(value);
      }
    }, 300);
  };

  return <input onChange={handleInputChange} placeholder={placeholder} />;
};

export default Input;
