import { billsRouter } from "./routers/bills.router";
import { couponsRouter } from "./routers/coupons.router";
import { customersRouter } from "./routers/customers.router";
import { reviewsRouter } from "./routers/reviews.router";
import { storeRouter } from "./routers/store.router";
import { storesRouter } from "./routers/stores.router";
import { userRouter } from "./routers/user.router";
import { walkoutsRouter } from "./routers/walkouts.router";
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
  customers: customersRouter,
  walkouts: walkoutsRouter,
  bills: billsRouter,
  reviews: reviewsRouter,
  store: storeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
