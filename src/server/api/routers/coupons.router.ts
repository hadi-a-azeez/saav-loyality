import { createTRPCRouter, publicProcedure } from "../trpc";

export const couponsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ["jdhfj3", "23kjhkh", "23n32j3"];
  }),
});
