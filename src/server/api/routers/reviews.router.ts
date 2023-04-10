import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const reviewsRouter = createTRPCRouter({
  getAllTextReviews: privateProcedure.query(async ({ ctx }) => {
    const reviews = await prisma.text_reviews.findMany({
      where: {
        store_id: ctx.user,
      },
      include: {
        loyalty_users: true,
      },
    });
    return reviews;
  }),
});
