const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Establece el directorio 'public' como carpeta de recursos estáticos
app.use(express.static('public'));

// Configura la ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido al sitio web!');
});

// Ruta para el recurso books.html
app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/books.html'));
});

// Ruta para el recurso authors.html
app.get('/authors', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/authors.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
