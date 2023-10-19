/*
  Warnings:

  - You are about to drop the column `endDate` on the `crops` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `crops` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "crops" DROP COLUMN "endDate",
DROP COLUMN "startDate";
