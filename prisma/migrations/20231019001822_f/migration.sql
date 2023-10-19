/*
  Warnings:

  - You are about to drop the column `crop_id` on the `crop_events` table. All the data in the column will be lost.
  - Added the required column `area_id` to the `crop_events` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "crop_events" DROP CONSTRAINT "crop_events_crop_id_fkey";

-- AlterTable
ALTER TABLE "crop_events" DROP COLUMN "crop_id",
ADD COLUMN     "area_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "crop_events" ADD CONSTRAINT "crop_events_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;
