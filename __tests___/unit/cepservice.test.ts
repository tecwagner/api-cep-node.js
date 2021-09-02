import request from "supertest";
import TestUtil from "../../src/common/test/TestUtil";

const url = "http://localhost:3002";

test("get /ceps retorna dados com sucesso", () => {
  const cep = TestUtil.giveMeValidZipCode();
  return request(url)
    .get("/api/v1/ceps?cep=14407351")
    .then((response) => {
      expect(response.status).toBe(200);
      expect(cep);
    });
});

test("get /ceps retorna cep inválido", () => {
  return request(url)
    .get("/api/v1/ceps?cep=22333999")
    .then((response) => {
      expect(response.status).toBe(400);
    });
});

test("get /ceps retorna um valor válido", () => {
  return request(url)
    .get("/api/v1/ceps?cep=22333")
    .then((response) => {
      expect(response.status).toBe(400);
    });
});
