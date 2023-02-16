import { couponsRouter } from "./routers/coupons.router";
import { storesRouter } from "./routers/stores.router";
import { userRouter } from "./routers/user.router";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  users: userRouter,
  coupons: couponsRouter,
  stores: storesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
