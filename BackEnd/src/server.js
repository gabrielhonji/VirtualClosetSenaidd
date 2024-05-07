const express = require("express");
const router = require('./routers');
const client = require("../config/db");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(router);

app.use((req, res, next) => {
    //Qualquuer endereço pode realizar requisição
    res.header('Access-Control-Allow-Origin', '*');

    //tipo de métodos que a API aceita
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    //Permite envio de dados para a API
    res.header("Access-Control-Allow-Headers", "Content-Type");

    //Executar o Cors
    app.use(cors());

    // Quando não houver erro deve continuar o processamento
    next();
});

client.query("select 1").then(()=>{
    console.log("Conectado com sucesso!");
    app.listen(8085, function(){
        console.log("Servidor rodando na url:http://localhost:8085")
    });
})
.catch(erro => console.log("connection failed \n"+erro));