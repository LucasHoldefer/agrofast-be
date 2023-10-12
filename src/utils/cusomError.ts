export class CustomError extends Error {
   code: number;
   constructor(code: number, mensagem: string) {
      super(mensagem);
      this.name = mensagem;
      this.code = code;
   }
}

// export class CustomError extends ErrorObject {
//    code: number;
//    constructor(message: string, code: number) {
//       super(message, code);
//       this.name = message;
//       this.code = code;
//     }
//   }