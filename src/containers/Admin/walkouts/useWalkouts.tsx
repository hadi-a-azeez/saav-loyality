// state and function for handling variants, quantity, and adding to cart

import type { RouterOutputs } from "@/utils/api";
import type { ReactNode } from "react";
import { useState, createContext, useContext, useMemo } from "react";
type Props = {
  children: ReactNode;
};

type WalkoutsContextType = {
  searchText: string;
  setSearchText: (state: string) => void;
  addWalkoutsDrawerVisible: boolean;
  setAddWalkoutsDrawerVisible: (state: boolean) => void;
};

const initialContext: WalkoutsContextType = {
  searchText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchText: () => {},
  addWalkoutsDrawerVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAddWalkoutsDrawerVisible: () => {},
};

const WalkoutsContext = createContext<WalkoutsContextType>(initialContext);

export const WalkoutsContextProvider = ({ children }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [addWalkoutsDrawerVisible, setAddWalkoutsDrawerVisible] =
    useState(false);

  const context = useMemo(
    () => ({
      searchText,
      setSearchText,
      addWalkoutsDrawerVisible,
      setAddWalkoutsDrawerVisible,
    }),
    [
      searchText,
      setSearchText,
      addWalkoutsDrawerVisible,
      setAddWalkoutsDrawerVisible,
    ]
  );

  return (
    <WalkoutsContext.Provider value={context}>
      {children}
    </WalkoutsContext.Provider>
  );
};

export const useWalkouts = () => {
  const context = useContext(WalkoutsContext);
  if (!context) {
    throw new Error("useWalkouts must be used within a ProductContextProvider");
  }
  return context;
};
