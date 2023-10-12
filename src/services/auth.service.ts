import { UsersRepository } from "../database/repositories/user.repository";
import { compare, hash } from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import { CustomError } from '../utils/cusomError';


export async function createUser(auth: { name: string, email: string, password: string }) {
   const usersRepository = new UsersRepository();

   const { name, email, password } = auth;
   const hashedPassword = await hash(password, 12);

   const emailTaken = await usersRepository.findUnique({
      where: { email },
      select: { id: true },
   });

   if (emailTaken) {
      throw new CustomError(400, 'This email is already in use.');
   }

   const user = await usersRepository.create({
      data: {
         name,
         email,
         password: hashedPassword
      },
   });

   const accessToken = generateAccessToken(user.id);
   return accessToken;
}


export async function authenticateUser(auth: { email: string, password: string }) {
   const usersRepository = new UsersRepository();

   const { email, password } = auth;

   const user = await usersRepository.findUnique({
      where: { email },
   });

   if (!user) {
      throw new CustomError(401, 'Invalid credentials');
   }

   const isPasswordValid = await compare(password, user.password);

   if (!isPasswordValid) {
      throw new CustomError(401, 'Invalid credentials');
   }

   const accessToken = generateAccessToken(user.id);
   return accessToken;

}


function generateAccessToken(userId: string) {
   return jsonwebtoken.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '10d' });
}