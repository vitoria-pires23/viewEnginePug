const express = require('express');
const app = express();
// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://biblioteca:Vitoria23!03@cluster0.kbtf4oc.mongodb.net/?retryWrites=true&w=majority";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

const path = require('path');

// Configurando o mecanismo de visualização Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Dados a serem passados para o template
const data = {
  pageTitle: 'Exemplo Pug Dinâmico com Express e Bootstrap',
  pageDescription: 'Esta é uma página de exemplo usando Pug com Express para valores dinâmicos e Bootstrap para layout responsivo.',
  items: ['Item 1', 'Item 2', 'Item 3']
};

// Rota para renderizar o template com os dados
app.get('/', (req, res) => {
  res.render('template', data);
});

// Servindo arquivos estáticos do Bootstrap, jQuery e CSS personalizado
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/estilos')));

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});
