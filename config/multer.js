// Importando multer, upload de arquivos
const multer = require("multer");

// Configuração do Multer para armazenamento em memória
const storage = multer.memoryStorage();

// Middleware do Multer
const upload = multer({ 
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limite de 5MB
    }
});

// Exporta para utilizar em outro arquivo
module.exports = upload;

// Multer onde os arquivos serão salvos
// const storage = multer.diskStorage({
    // Função que define o destino do arquivo
    // destination: function (req, file, cb) {
        // O destino e a pasta upload
        // cb(null, "uploads/"); // null significa que não há erro
    // },
    // Função que define o nome do arquivo para salvar
    // filename: function (req, file, cb) {
        // Data + Extensão do arquivo
        // cb(null, Date.now() + path.extname(file.originalname));
    // },
// });



