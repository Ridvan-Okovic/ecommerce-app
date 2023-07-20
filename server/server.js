const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./database/connect');
require('express-async-errors');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const productsRouter = require('./routes/products');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = 3001;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('Server started at http://localhost:3001');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
