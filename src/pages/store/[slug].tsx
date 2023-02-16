// this is a page that for stores, take the slug and get the store from the database

import { GetStaticProps, GetStaticPaths } from "next";

import { api } from "../../utils/api";

const Store = ({ store }) => {
  return (
    <div>
      <h1>{store.name}</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const store = await api.store.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return {
    props: {
      store,
    },
  };
};
