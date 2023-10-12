/*
  Warnings:

  - You are about to drop the column `crop` on the `areas` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `areas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "areas" DROP COLUMN "crop",
DROP COLUMN "type";
