/*
  Warnings:

  - You are about to drop the column `crop` on the `areas` table. All the data in the column will be lost.
  - You are about to drop the `area_events` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "area_events" DROP CONSTRAINT "area_events_area_id_fkey";

-- AlterTable
ALTER TABLE "areas" DROP COLUMN "crop";

-- DropTable
DROP TABLE "area_events";

-- CreateTable
CREATE TABLE "crops" (
    "id" UUID NOT NULL,
    "area_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "crops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crop_events" (
    "id" UUID NOT NULL,
    "crop_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fertilizer" TEXT NOT NULL,
    "quantityFertilizer" DOUBLE PRECISION NOT NULL,
    "workforce" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "crop_events_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "crops" ADD CONSTRAINT "crops_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "areas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "crop_events" ADD CONSTRAINT "crop_events_crop_id_fkey" FOREIGN KEY ("crop_id") REFERENCES "crops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
