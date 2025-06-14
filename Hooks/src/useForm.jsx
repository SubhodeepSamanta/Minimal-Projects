import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value, // Update the specific field
    }));
  };

  const resetChange = () => {
    setValue(initialState); // Reset to the initial state
  };

  return { value, handleChange, resetChange };
};