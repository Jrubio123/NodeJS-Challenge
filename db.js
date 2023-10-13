const { MongoClient } = require('mongodb');

// Define la URI de conexión a tu base de datos
const uri = 'mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin';

// Crea una función para conectar a la base de datos
async function connectDB() {
  try {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
    console.log('Conexión exitosa a la base de datos de MongoDB');
    return client;
  } catch (error) {
    console.error('Error de conexión a la base de datos de MongoDB:', error);
    throw error;
  }
}

module.exports = connectDB;
