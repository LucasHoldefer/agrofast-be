-- AlterTable
ALTER TABLE "areas" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "crop_events" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "quantityFertilizer" DROP NOT NULL,
ALTER COLUMN "workforce" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "fertilizer" DROP NOT NULL;

-- AlterTable
ALTER TABLE "crops" ALTER COLUMN "description" DROP NOT NULL;
