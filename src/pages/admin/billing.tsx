import BillingContainer from "@/containers/Admin/Billing";
import { BillingContextProvider } from "@/containers/Admin/Billing/useBilling";

const Billing = () => {
  return (
    <BillingContextProvider>
      <BillingContainer />
    </BillingContextProvider>
  );
};

export default Billing;
