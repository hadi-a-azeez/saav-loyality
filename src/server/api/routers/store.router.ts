import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const storeRouter = createTRPCRouter({
  getStoreInfo: privateProcedure.query(async ({ ctx }) => {
    const store = await prisma.stores.findUnique({
      where: {
        id: ctx.user,
      },
    });
    return store;
  }),
  updateStoreInfo: privateProcedure
    .input(
      z.object({
        store_name: z.string().optional(),
        address: z.string().optional().nullable(),
        phone: z.string().optional(),
        email: z.string().optional().nullable(),
        store_contact: z.string().optional(),
        store_instagram: z.string().optional().nullable(),
        store_url: z.string().optional(),
        store_logo: z.string().optional().nullable(),
        store_banner: z.string().optional().nullable(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const store = await prisma.stores.update({
        where: {
          id: ctx.user,
        },
        data: input,
      });
      return store;
    }),
});
