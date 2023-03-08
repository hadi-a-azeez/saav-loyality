// state and function for handling variants, quantity, and adding to cart

import { useState, createContext, useContext, ReactNode, useMemo } from "react";
type Props = {
  children: ReactNode;
};

type CustomerContextType = {
  customerDetailsModalVisible: boolean;
  setCustomerDetailsModalVisible: (state: boolean) => void;
};

const initialContext: CustomerContextType = {
  customerDetailsModalVisible: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCustomerDetailsModalVisible: () => {},
};

const CustomerContext = createContext<CustomerContextType>(initialContext);

export const CustomerContextProvider = ({ children }: Props) => {
  const [customerDetailsModalVisible, setCustomerDetailsModalVisible] =
    useState(false);

  const context = useMemo(
    () => ({
      customerDetailsModalVisible,
      setCustomerDetailsModalVisible,
    }),
    [customerDetailsModalVisible, setCustomerDetailsModalVisible]
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
