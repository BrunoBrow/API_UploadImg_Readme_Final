# API de Upload de Imagens - WebAPIUploadImg

Esta é uma API em construção, que será uma API RESTful desenvolvida para o gerenciamento de imagens, utilizando **HTML**, **CSS**, **Node.js**, **Express**, **DotEnv**, **Mongoose** e **Multer**. A API permite fazer o upload de imagens para um banco de dados e exluir essa imagem.

Este é apenas o escopo inicial.

## Funcionalidades

- **GET /**: Retorna a lista completa de imagens.
- **GET /:id**: Retorna uma imagem especifica, identificando pelo id.
- **POST /**: Adiciona e faz upload de uma imagem à lista.
- **DELETE /:id**: Remove uma imagem específica pelo id.

## Estrutura inicial do Projeto

- **app.js**: Arquivo principal que configura o servidor Express e as rotas da API.
- **Index.html**: Arquivo principal do frontend (Parte Visual da aplicação).
- **Style.css**: Arquivo de configurações e estilos do frontend (parte visual da aplicação).
- **app.js**: Importa o Express para criar o servidor e chamar as rota, cria uma instância do Express, carrega as variáveis de ambiente do .ENV, estabelece a conexão com o DB, define a porta do servidor, ou do .ENV ou 3000 por padrão, importa o roteador de imagens para gerenciar as rotas criadas, configuração de CORS, define que todas as rotas são "localhost:3000/pictures", inicia o servidor, e exibe uma mensagem ao usuario
- **db.js**: Importa mongoose para iteragir com o DB, carrega a variavel de ambiente .envi com os dados de usuario e senha, configurações para permitir consultas (restritas),oObtem as credenciais do MongoDB armazenada no .env.
- **script.js**: Arquivo com a estrutura completa da progração, elementos da interface (DOM) e funções de cada etapa da aplicação.
- **PictureController.js**: Arquivo com as funções para controle de imagens.
- **Picture.js**: Definindo um Schema para as Imagens.
- **picture.js**: Define as rotas de ações da aplicação.


## Tecnologias Usadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construção de API REST.
- **Multer**: O Multer é um middleware do Node.js que permite fazer upload de arquivos. Ele é frequentemente usado com o Express. 
- **Mongoose**: O Mongoose é uma biblioteca que permite modelar dados para o MongoDB, um banco de dados NoSQL. O Mongoose é uma ferramenta baseada em Node.js que facilita a interação entre as aplicações e o MongoDB. 
- **DotEnv**: dotenv é uma biblioteca em diversas linguagens de programação, especialmente útil em Node.js e Python, que permite carregar variáveis de ambiente de um arquivo .env para a aplicação. Este arquivo contém informações de configuração, como chaves de API, senhas e dados de conexão com bancos de dados, que são mantidas separadas do código-fonte da aplicação. 
- **HTML**: HTML, sigla para HyperText Markup Language, é a linguagem de marcação fundamental para a criação de páginas web. Define a estrutura e o conteúdo de uma página, indicando ao navegador como os elementos como texto, imagens e links devem ser organizados e apresentados. 
-**CSS**: CSS, que significa Folhas de Estilo em Cascata, é uma linguagem utilizada para estilizar páginas da web. Permite definir como os elementos HTML serão apresentados visualmente, como cores, fontes, espaçamentos, e layout. O HTML define a estrutura da página, enquanto o CSS controla a sua aparência. 
-**MongoDB**: O MongoDB é um sistema de gerenciamento de banco de dados (DBMS) NoSQL de código aberto e orientado a documentos, que armazena dados em documentos JSON binários (BSON). Essa abordagem permite armazenar dados não estruturados, semiestruturados e estruturados de forma flexível, ideal para aplicações modernas que exigem grande escalabilidade e desempenho. 

## Endpoints

### 1. **GET /**

Retorna a lista completa de Imagens.

#### Exemplo de resposta:

```json
<<<<<<< HEAD
[
  {
    "nome": "Nome da Imagem",
    "image": "Nome Imagem Buffer",
    "contentType": "Tipo/Formato da Imagem"
  },
  {
 "nome": "Nome da Imagem",
    "image": "Nome Imagem Buffer",
    "contentType": "Tipo/Formato da Imagem"
  }
]

```

## Como Rodar o Projeto

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```
2. **Instale as dependências:**

    Navegue até o diretório do projeto e execute o comando:

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    Após a instalação das dependências, inicie o servidor:

    ```bash
    node ./app.js
    ```

4. **Acesse a API:**

    A API estará disponível em [http://localhost:3000](http://localhost:3000).

    **https://readme.so/pt/editor**# API de Upload de Imagens - WEBAPI



