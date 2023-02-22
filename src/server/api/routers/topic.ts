import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.topic.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.topic.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

/////////// EXAMPLE - DELETE WHEN BUILT

// export const topicsRouter = createTRPCRouter({
//   getAll: publicProcedure.query(async ({ ctx }) => {
//     try {
//       return await ctx.prisma.topics.findMany({
//         select: {
//           name: true,
//           message: true,
//         },
//         orderBy: {
//           createdAt: "desc",
//         },
//       });
//     } catch (error) {
//       console.log("error with getAll", error);
//     }
//   }),

//   // change this to protected procedure to enforce users being authed
//   postMessage: publicProcedure
//     .input(
//       z.object({
//         name: z.string(),
//         message: z.string(),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       try {
//         await ctx.prisma.topics.create({
//           data: {
//             name: input.name,
//             message: input.message,
//           },
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }),
// });
