export class CustomError extends Error {
  code: number;
  mem: {};

  constructor(code: number, mensagem: string, mem?: {}) {
    super(mensagem);
    this.name = mensagem;
    this.code = code;
    this.mem = mem;
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
