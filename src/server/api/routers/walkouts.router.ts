import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const walkoutsRouter = createTRPCRouter({
  getAllWalkoutReasons: publicProcedure
    .input(
      z.object({
        search: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      const walkoutReasons = await prisma.walkout_reasons.findMany({
        where: {
          OR: [
            {
              name: {
                contains: input.search,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: input.search,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      return walkoutReasons;
    }),
  getAllWalkouts: privateProcedure
    .input(
      z.object({
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const walkouts = await prisma.walkouts.findMany({
        where: {
          store_id: ctx.user,
          OR: [
            {
              remarks: {
                contains: input.search,
                mode: "insensitive",
              },
            },
            {
              loyalty_users: {
                name: {
                  contains: input.search,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          walkout_reasons: true,
          loyalty_users: true,
        },
      });
      return walkouts;
    }),
  addWalkout: privateProcedure
    .input(
      z.object({
        date: z.string(),
        loyalty_user_id: z.number(),
        walkout_reason_id: z.number(),
        remarks: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const walkout = await prisma.walkouts.create({
        data: {
          date: input.date,
          loyalty_user_id: input.loyalty_user_id,
          walkout_reasons_id: input.walkout_reason_id,
          remarks: input.remarks,
          store_id: ctx.user,
        },
      });
      return walkout;
    }),
});
