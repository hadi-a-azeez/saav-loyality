// create a private procedure for customers
import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, privateProcedure } from "../trpc";

export const customersRouter = createTRPCRouter({
  getAll: privateProcedure
    .input(
      z.object({
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const customers = await prisma.loyalty_users.findMany({
        where: {
          store_id: ctx.user,
          OR: [
            {
              name: {
                contains: input.search,
                mode: "insensitive",
              },
            },
            {
              phone: {
                contains: input.search,
                mode: "insensitive",
              },
            },
          ],
        },
        include: {
          users_points: true,
          walkouts: true,
          orders: true,
        },
      });
      return customers;
    }),
  addUser: privateProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        dob: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const customer = await prisma.loyalty_users.create({
        data: {
          name: input.name,
          phone: input.phone,
          dob: input.dob,
          store_id: ctx.user,
        },
      });
      return customer;
    }),
});
