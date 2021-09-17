import request from "supertest";
import TestUtil from "../../src/common/test/TestUtil";

import { app } from "../../src/app";

const cepValido = "/api/v1/ceps?cep=14408050";

const cepInvalido = "/api/v1/ceps?cep=22333999";

const cepMinLength = "/api/v1/ceps?cep=22333";

test("get /ceps - retorna dados com sucesso", async () => {
  const cep = TestUtil.giveMeValidZipCode();
  const response = await request(app).get(cepValido);
  expect(response.status).toBe(200);
  expect(cep);
});

test("get /ceps - retorna cep inválido", () => {
  return request(app)
    .get(cepInvalido)
    .then((response) => {
      expect(response.status).toBe(400);
    });
});

test("get /ceps - validando o limite de caracter informado", () => {
  return request(app)
    .get(cepMinLength)
    .then((response) => {
      expect(response.status).toBe(400);
    });
});
