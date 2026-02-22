require('dotenv').config();  // Load .env FIRST
const express = require('express');
const connectDB = require('./config/database.js');  // Note: full path matches your file
const routes = require('./routes');

connectDB().then(() => {  // Wait for DB before app
  const app = express();
  app.use(express.json());
  app.use('/', routes);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`CRM running on port ${PORT}`));
}).catch(err => {
  console.error('DB connection failed:', err.message);
  process.exit(1);
});
