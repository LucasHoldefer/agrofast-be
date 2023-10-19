/*
  Warnings:

  - You are about to drop the column `area_id` on the `crop_events` table. All the data in the column will be lost.
  - Added the required column `crop_id` to the `crop_events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fertilizer` to the `crop_events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "crop_events" DROP CONSTRAINT "crop_events_area_id_fkey";

-- AlterTable
ALTER TABLE "crop_events" DROP COLUMN "area_id",
ADD COLUMN     "crop_id" UUID NOT NULL,
ADD COLUMN     "fertilizer" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "crop_events" ADD CONSTRAINT "crop_events_crop_id_fkey" FOREIGN KEY ("crop_id") REFERENCES "crops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
