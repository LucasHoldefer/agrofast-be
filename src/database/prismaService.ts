import { PrismaClient } from "@prisma/client";

const prismaService = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});

export { prismaService };
