import { createTRPCRouter, publicProcedure, privateProcedure } from "../trpc";
import { prisma } from "../../db";
import { z } from "zod";

export const couponsRouter = createTRPCRouter({
  getAllOccassions: publicProcedure.query(async ({}) => {
    const occassions = await prisma.coupon_occassions.findMany();
    return occassions;
  }),
  getAllCoupons: privateProcedure.query(async ({ ctx }) => {
    const coupons = await prisma.coupons.findMany({
      where: {
        store_id: ctx.user,
      },
      include: {
        coupon_occassions: true,
      },
    });
    return coupons;
  }),
  addCoupon: privateProcedure
    .input(
      z.object({
        occassion_id: z.number(),
        points: z.string(),
        start_date: z.string(),
        end_date: z.string(),
        status: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const coupon = await prisma.coupons.create({
        data: {
          coupon_occassions_id: input.occassion_id,
          points: Number(input.points),
          start_date: input.start_date,
          end_date: input.end_date,
          status: input.status ? "active" : "inactive",
          store_id: ctx.user,
        },
      });
      return coupon;
    }),
  // update coupon status
  updateCouponStatus: privateProcedure
    .input(
      z.object({
        coupon_id: z.number(),
        status: z.boolean(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const coupon = await prisma.coupons.update({
        where: {
          id: input.coupon_id,
        },
        data: {
          status: input.status ? "active" : "inactive",
        },
      });
      return coupon;
    }),
    // get store points system
  getStorePointsSystem: privateProcedure.query(async ({ ctx }) => {
    const store = await prisma.store_points_system.findUnique({
      where: {
        store_id: ctx.user,
      },
    });
    return store;
  }),
  // edit store points system
  editStorePointsSystem: privateProcedure
    .input(
      z.object({
        points: z.string(),
        rupees: z.string(),
        minimum_order_amount: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const store = await prisma.store_points_system.update({
        where: {
          store_id: ctx.user,
        },
        data: {
          points: Number(input.points),
          rupees: Number(input.rupees),
          minimum_order_amount: Number(input.minimum_order_amount),
        },
      });
      return store;
    }),
});
