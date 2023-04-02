// state and function for handling variants, quantity, and adding to cart

import type { RouterOutputs } from "@/utils/api";
import type { ReactNode } from "react";
import { useState, createContext, useContext, useMemo } from "react";
type Props = {
  children: ReactNode;
};

type ICustomertype = RouterOutputs["customers"]["getAll"][0];

type CustomerContextType = {
  customerDetailsModalVisible: boolean;
  setCustomerDetailsModalVisible: (state: boolean) => void;
  customerDetails: ICustomertype | undefined;
  setCustomerDetails: (state: ICustomertype | undefined) => void;
  addCustomerDrawerVisible: boolean;
  setAddCustomerDrawerVisible: (state: boolean) => void;
  searchText: string;
  setSearchText: (state: string) => void;
};

const initialContext: CustomerContextType = {
  customerDetailsModalVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCustomerDetailsModalVisible: () => {},
  customerDetails: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCustomerDetails: () => {},
  addCustomerDrawerVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAddCustomerDrawerVisible: () => {},
  searchText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSearchText: () => {},
};

const CustomerContext = createContext<CustomerContextType>(initialContext);

export const CustomerContextProvider = ({ children }: Props) => {
  const [customerDetailsModalVisible, setCustomerDetailsModalVisible] =
    useState(false);
  const [customerDetails, setCustomerDetails] = useState<ICustomertype>();
  const [addCustomerDrawerVisible, setAddCustomerDrawerVisible] =
    useState(false);
  const [searchText, setSearchText] = useState("");

  const context = useMemo(
    () => ({
      customerDetailsModalVisible,
      setCustomerDetailsModalVisible,
      customerDetails,
      setCustomerDetails,
      addCustomerDrawerVisible,
      setAddCustomerDrawerVisible,
      searchText,
      setSearchText,
    }),
    [
      customerDetailsModalVisible,
      setCustomerDetailsModalVisible,
      customerDetails,
      setCustomerDetails,
      addCustomerDrawerVisible,
      setAddCustomerDrawerVisible,
      searchText,
      setSearchText,
    ]
  );

  return (
    <CustomerContext.Provider value={context}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomer must be used within a ProductContextProvider");
  }
  return context;
};
