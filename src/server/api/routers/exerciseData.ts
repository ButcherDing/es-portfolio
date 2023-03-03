import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const exerciseDataRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    // try {
    return ctx.prisma.exerciseData.findMany({
      select: {
        data: true,
      },
    });
    // } catch (error) {
    //   console.log("error with getAll", error);
    // }
  }),
  //   create: protectedProcedure
  //     .input(
  //       z.object({ fruits: z.string() })
  //     )
  //     .mutation(async ({ ctx, input }) => {
  //       return ctx.prisma.fruits.create({
  //         data: {
  // fruits: [],
  //         },
  //       });
  //     }),
  //   delete: protectedProcedure
  //     .input(z.object({ id: z.string() }))
  //     .mutation(async ({ ctx, input }) => {
  //       return ctx.prisma.note.delete({
  //         where: {
  //           id: input.id,
  //         },
  //       });
  //     }),
});
