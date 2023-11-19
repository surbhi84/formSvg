import { useReducer } from "react";
import { CHANGEPERIOD, EDITDETAILS, REMOVEADDON } from "./types";

export const useDetailsReducer = () => {
  const initialAccDetails = {
    userName: "",
    email: "",
    phone: "",
    plan: { title: "Arcade", price: "9/mo" },
    period: "monthly",
    addOns: [{ title: "Online service", price: "1/mo" }],
  };

  const getDetails = (state, { type, payload }) => {
    switch (type) {
      case EDITDETAILS: {
        return { ...state, ...payload };
      }
      case REMOVEADDON: {
        const tempAddOns = [
          ...state.addOns.filter((item) => item.title !== payload.title),
        ];
        return { ...state, addOns: tempAddOns };
      }
      case CHANGEPERIOD: {
        return { ...state, addOns: [], period: payload };
      }
    }
  };

  const [accDetails, detailsDispatch] = useReducer(
    getDetails,
    initialAccDetails
  );

  return [accDetails, detailsDispatch];
};
