import { useReducer } from "react";

const EDITFORM = "editForm";

export const useDataReducer = () => {
  const initialFormData = {
    step: 1,
    name: "",
    email: "",
    phone: "",
    plan: "",
    period: "",
    addOns: {},
  };

  const getFormData = (state, { type, payload }) => {
    switch (type) {
      case EDITFORM: {
        return { ...state,...payload };
      }
    }
  };

  const [formData, dataDispatch] = useReducer(getFormData, initialFormData);
  
  return [formData, dataDispatch];
};
