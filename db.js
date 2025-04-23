// importa mongoose para iteragir com o DB
const mongoose = require("mongoose");

//Carregando a variavel de ambiente .envi com os dados de usuario e senha
require("dotenv").config();

// configurando para permitir consultas (restritas)
mongoose.set("strictQuery", true)

//Obtem as credenciais do MongoDB armazenada no .env
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const mongoURI = `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.drcx0.mongodb.net/?retryWrites=true&w=majority&appName=ClusterAPI`;

// Funçao para no DB
async function main() {
    await mongoose.connect(mongoURI) //link do mongoodb
        
    console.log("Conectou ao banco de dados!"); //exibe ao usuário que a conexao foi bem sucedida
}

main().catch((err) => console.log(err)); //exibe ao usuário a mensagem de erro

module.exports = main; //exporta a função para utilizar em outro arquivo
