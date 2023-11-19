import { useReducer } from "react";
import { EDITDETAILS } from "./types";

export const useDetailsReducer = () => {
  const initialAccDetails = {
    userName: "",
    email: "",
    phone: "",
    plan: "Arcade",
    period: "monthly",
    addOns: ["Online service"],
  };

  const getDetails = (state, { type, payload }) => {
    switch (type) {
      case EDITDETAILS: {
        return { ...state, ...payload };
      }
    }
  };

  const [accDetails, detailsDispatch] = useReducer(
    getDetails,
    initialAccDetails
  );

  return [accDetails, detailsDispatch];
};
