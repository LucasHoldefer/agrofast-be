/*
  Warnings:

  - Added the required column `aendDate` to the `crop_events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "crop_events" ADD COLUMN     "aendDate" TIMESTAMP(3) NOT NULL;
