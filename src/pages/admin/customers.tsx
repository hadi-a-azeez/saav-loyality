import CustomersContainer from "@/containers/Admin/customers";
import { CustomerContextProvider } from "@/containers/Admin/customers/useCustomer";

const Dashboard = () => {
  return (
    <CustomerContextProvider>
      <CustomersContainer />
    </CustomerContextProvider>
  );
};

export default Dashboard;
