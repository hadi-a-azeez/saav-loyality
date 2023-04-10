import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const billsRouter = createTRPCRouter({
  getUserPoints: privateProcedure
    .input(
      z.object({
        user_id: z.number(),
      })
    )
    .query(async ({ ctx, input }) => {
      // sum of all points earned by user subtracted by points redeemed
      const pointsHistory = await prisma.points_history.groupBy({
        by: ["loyalty_users_id", "transaction_type"],
        where: {
          loyalty_users_id: input.user_id,
          store_id: ctx.user,
        },
        _sum: {
          points: true,
        },
      });

      const totalPoints = pointsHistory.reduce((total, item) => {
        if (item.transaction_type === "earned") {
          return total + (item._sum.points || 0);
        } else {
          return total - (item._sum.points || 0);
        }
      }, 0);

      return totalPoints;
    }),
  getStorePointsSystem: privateProcedure.query(async ({ ctx }) => {
    const pointsSystem = await prisma.store_points_system.findUnique({
      where: {
        store_id: ctx.user,
      },
    });
    return pointsSystem;
  }),
  getAllBills: privateProcedure.query(async ({ ctx }) => {
    const bills = await prisma.bills.findMany({
      where: {
        store_id: ctx.user,
      },
      include: {
        loyalty_users: true,
      },
    });
    return bills;
  }),
  // add to points history
  addToPointsHistory: privateProcedure
    .input(
      z.object({
        user_id: z.number(),
        points: z.number(),
        occassions_id: z.number(),
        transaction_type: z.enum(["redeemed", "earned"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const pointsHistory = await prisma.points_history.create({
        data: {
          transaction_type: input.transaction_type,
          loyalty_users_id: input.user_id,
          store_id: ctx.user,
          points: input.points,
          occassions_id: input.occassions_id,
        },
      });
      return pointsHistory;
    }),
  // add to user points
  addToUserPoints: privateProcedure
    .input(
      z.object({
        user_id: z.number(),
        points: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const userPoints = await prisma.user_points.findFirst({
        where: {
          id: input.user_id,
          store_id: ctx.user,
        },
      });
      if (!userPoints) {
        const newUserPoints = await prisma.user_points.create({
          data: {
            loyalty_users_id: input.user_id,
            store_id: ctx.user,
            points: input.points,
          },
        });
        return newUserPoints;
      } else {
        const updatedUserPoints = await prisma.user_points.update({
          where: {
            id: userPoints.id,
          },
          data: {
            points: userPoints.points + input.points,
          },
        });
        return updatedUserPoints;
      }
    }),
  // add to bills
  addToBills: privateProcedure
    .input(
      z.object({
        user_id: z.number(),
        bill_amount: z.number(),
        bill_date: z.string(),
        payment_method: z.enum(["cash", "card", "online"]),
        number_of_items: z.number(),
        points_redeemed: z.number(),
        points_earned: z.number(),
        discounted_amount: z.number(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const bill = await prisma.bills.create({
        data: {
          loyalty_users_id: input.user_id,
          store_id: ctx.user,
          bill_amount: input.bill_amount,
          bill_date: input.bill_date,
          payment_method: input.payment_method,
          number_of_items: input.number_of_items,
          points_redeemed: input.points_redeemed,
          points_earned: input.points_earned,
          discounted_amount: input.discounted_amount,
        },
      });
      return bill;
    }),
});
