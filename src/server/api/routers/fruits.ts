import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const fruitsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    try {
    return ctx.prisma.fruits.findMany({
      select: {
        name: true,
        data: true
      },
    });
    } catch (error) {
      console.log("error with getAll", error);
    }
  }),

});
