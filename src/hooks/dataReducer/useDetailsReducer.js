import { useReducer } from "react";
import { ADDADDON, CHANGEPERIOD, EDITDETAILS, REMOVEADDON } from "./types";

export const useDetailsReducer = () => {
  const initialAccDetails = {
    userName: "",
    email: "",
    phone: "",
    plan: {},
    period: "monthly",
    addOns: [],
  };

  const getDetails = (state, { type, payload }) => {
    switch (type) {
      case EDITDETAILS: {
        return { ...state, ...payload };
      }
      case ADDADDON: {
        return { ...state, addOns: [...state.addOns, payload] };
      }
      case REMOVEADDON: {
        const tempAddOns = [
          ...state.addOns.filter((item) => item.title !== payload.title),
        ];
        return { ...state, addOns: tempAddOns };
      }
      case CHANGEPERIOD: {
        return { ...state, plan: {}, addOns: [], period: payload };
      }
    }
  };

  const [accDetails, detailsDispatch] = useReducer(
    getDetails,
    initialAccDetails
  );

  return [accDetails, detailsDispatch];
};
