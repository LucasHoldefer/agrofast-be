import jwt from 'jsonwebtoken';

export function activeUserId(authorization: string) {

   const decodedToken = jwt.verify(authorization.replaceAll("Bearer ", ""), process.env.JWT_SECRET);

   const sub = decodedToken.sub;
   return sub.toString();
}