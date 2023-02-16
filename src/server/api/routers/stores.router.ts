import { createTRPCRouter, publicProcedure } from "../trpc";

export const storesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.stores.findMany();
  }),
  getOne: publicProcedure.query(({ ctx, input }) => {
    return ctx.prisma.stores.findUnique({
      where: {
        id: input.id,
      },
    });
  }),
});
