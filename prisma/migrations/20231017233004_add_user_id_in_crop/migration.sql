/*
  Warnings:

  - Added the required column `user_id` to the `crops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "crops" ADD COLUMN     "user_id" UUID NOT NULL;

-- AddForeignKey
ALTER TABLE "crops" ADD CONSTRAINT "crops_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
