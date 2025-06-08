// setup-env.js
require('dotenv').config();

// Verificar que las variables existan
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL no está definida en .env");
}

console.log("Variables cargadas correctamente");