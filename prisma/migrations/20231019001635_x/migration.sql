-- AddForeignKey
ALTER TABLE "crop_events" ADD CONSTRAINT "crop_events_crop_id_fkey" FOREIGN KEY ("crop_id") REFERENCES "crops"("id") ON DELETE CASCADE ON UPDATE CASCADE;
