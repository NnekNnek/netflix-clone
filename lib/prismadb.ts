import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;

// hot preloading: on code change, the server will not restart, but the new code updates and reruns
// this is a problem because the client will be reinitialized, and the old client will still be running
// trick: save prisma client in a global file, these are not effected by hot reloading