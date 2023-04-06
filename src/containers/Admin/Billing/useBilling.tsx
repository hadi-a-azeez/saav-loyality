// state and function for handling variants, quantity, and adding to cart

import type { RouterOutputs } from "@/utils/api";
import type { ReactNode } from "react";
import { useState, createContext, useContext, useMemo } from "react";
type Props = {
  children: ReactNode;
};

type ContextType = {
  searchText: string;
  setSearchText: (state: string) => void;
  addBillingDrawerVisible: boolean;
  setAddBillingDrawerVisible: (state: boolean) => void;
};

const initialContext: ContextType = {
  searchText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchText: () => {},
  addBillingDrawerVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAddBillingDrawerVisible: () => {},
};

const BillingContext = createContext<ContextType>(initialContext);

export const BillingContextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [addBillingDrawerVisible, setAddBillingDrawerVisible] = useState(false);

  const context = useMemo(
    () => ({
      searchText,
      setSearchText,
      addBillingDrawerVisible,
      setAddBillingDrawerVisible,
    }),
    [
      searchText,
      setSearchText,
      addBillingDrawerVisible,
      setAddBillingDrawerVisible,
    ]
  );

  return (
    <BillingContext.Provider value={context}>
      {children}
    </BillingContext.Provider>
  );
};

export const useBilling = () => {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error("useBilling must be used within a ProductContextProvider");
  }
  return context;
};
