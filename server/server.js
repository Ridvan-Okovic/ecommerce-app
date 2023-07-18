const express = require('express');
require('dotenv').config();
const connectDB = require('./database/connect');
require('express-async-errors');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const productsRouter = require('./routes/products');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from home page!');
});

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
