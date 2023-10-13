# NodeJS-Challenge

Esta es una API de ejemplo para una tienda de zapatillas. La API proporciona dos rutas públicas:

1. **/products**: Esta ruta devuelve un arreglo de productos que están actualmente en stock.

2. **/users/price/{user_id}/{nombre_producto}**: Algunos clientes de esta tienda tienen precios especiales para ciertas marcas. Esta ruta devuelve el precio especial para el cliente y la marca proporcionados.
   Si el cliente no tiene un precio especial para la marca, la ruta devuelve el precio base.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Jrubio123/NodeJS-Challenge.git

2. Navega al directorio del proyecto
3. Instala las dependencias: npm install
4. Asegúrate de tener una instancia de MongoDB ejecutándose localmente o configura la URI de conexión en el archivo db.js

Uso
Ejecuta la aplicación: node ./app.js

Abre tu navegador web y accede a:

http://localhost:3000/products para ver los productos en stock.

http://localhost:3000/users/price/{user_id}/{nombre_producto}  

ejemplo: http://localhost:3000/users/price/1/Adidas%20Superstar para buscar un precio especial
  
