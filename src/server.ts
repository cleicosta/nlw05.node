import express, { request, response } from "express";

const app = express();

/**GET = BUSCAS
 * POST = CRIAÇÂO
 * PUT = ALTERAÇÂO
 * DELETE = DELETAR
 * PATCH = ALTERAR UMA INFORMAÇÃO ESPECÍFICA
 */
app.get("/",(request, response) =>{
    return response.send("olá mundo!");

});

app.post("/users",(request, response)=>{
    return response.send("olá mundo 2");
});

app.listen(3333, ()=> console.log(" Server is running on port 3333"));