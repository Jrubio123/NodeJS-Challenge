const express = require('express');
const app = express();
const port = 3000;

// Importa las rutas de productos
const productRoutes = require('./routes/productRoutes');
// Importa las rutas de usuarios
const userRoutes = require('./routes/userRoutes');

// Configuración de la aplicación
app.use(express.json());

// Utiliza las rutas de productos
app.use('/products', productRoutes);

// Utiliza las rutas de usuarios
app.use('/users', userRoutes);

// Inicia el servidor
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
