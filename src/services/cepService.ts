import { Request, Response } from "express";
import axios from "axios";
class GetCepService {
  async handle(request: Request, response: Response) {
    const codeZip = String(request.query.cep);

    if (!codeZip || codeZip.length !== 8) {
      throw new Error("Digite um CEP Válido!");
    }

    const result = await axios.get(process.env.API_URL + `/${codeZip}/json/`);

    if (result.data.erro) {
      throw new Error(`CEP ${codeZip} inválido!`);
    }
    return response.status(200).json(result.data);
  }
}

export { GetCepService };
