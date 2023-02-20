// this is a page that for stores, take the slug and get the store from the database
import HomeContainer from "../../containers/User/store";
import { api } from "../../utils/api";

const Store = () => {
  //pass the data to the container with the types
  const { data, isLoading } = api.stores.getOne.useQuery(1);

  if (isLoading) return <div>Loading...</div>;
  return <HomeContainer data={data} isLoading={isLoading} />;
};

export default Store;
