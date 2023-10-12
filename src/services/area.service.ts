import { CustomError } from "../utils/cusomError";
import { AreasRepository } from "../database/repositories/area.repository";

export async function listAreaService(userId: string) {
   const areasRepository = new AreasRepository();

   const area = await areasRepository.finAllByUserId({
      where: {
         userId
      }
   });

   return area;
}

export async function createAreaService(areas: { name: string, description: string, crop: string }, userId: string) {
   const areasRepository = new AreasRepository();

   const { name, description, crop } = areas;

   const area = await areasRepository.create({
      data: {
         name,
         description,
         userId,
         crop
      }
   });

   return area;
}

export async function updateAreaService(areas: { name: string, description: string, crop: string }, areaId: string) {
   const areasRepository = new AreasRepository();

   const { name, description, crop } = areas;

   const area = await areasRepository.update({
      where: {
         id: areaId
      },
      data: {
         name,
         description,
         crop
      }
   });

   return area;
}


export async function validateAreaUser(userId: string, transactionId: string) {
   const areasRepository = new AreasRepository();

   const isOwner = await areasRepository.findFirst({
     where: {
       userId: userId,
       id: transactionId,
     }
   })

   console.log({isOwner});

   if (!isOwner) {
     throw new CustomError(404, 'Transaction not foud.');
   }
 }
