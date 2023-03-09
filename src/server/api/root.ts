import { createTRPCRouter } from "./trpc";
import { guestbookRouter } from "./routers/guestbook";
import { exampleRouter } from "./routers/example";
import { topicRouter } from "./routers/topic";
import { noteRouter } from "./routers/note";
import { fakeDataRouter } from "./routers/fakeData";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  guestbook: guestbookRouter,
  topic: topicRouter,
  note: noteRouter,
  fakeData: fakeDataRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
