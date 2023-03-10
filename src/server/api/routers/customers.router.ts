// create a private procedure for customers
import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, privateProcedure } from "../trpc";

export const customersRouter = createTRPCRouter({
  getAll: privateProcedure.query(async ({ ctx }) => {
    const customers = await prisma.loyalty_users.findMany();
    return customers;
  }),
});
