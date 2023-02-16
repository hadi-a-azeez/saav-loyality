import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const storesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const stores = await prisma.stores.findMany();
    return stores;
  }),
  getOne: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    return prisma.stores.findUnique({
      where: {
        id: input,
      },
    });
  }),
});
