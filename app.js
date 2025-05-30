import dotenv from 'dotenv';
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import connectDB from './config/db.js';
import customerRoutes from './routes/customerRoutes.js';
import branchRoutes from './routes/branchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Customs Broker API',
      version: '1.0.0',
      description: 'API for managing customs customers and branches',
    },
    servers: [{ url: `http://localhost:${PORT}` }],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/customers', customerRoutes);
app.use('/api/branches', branchRoutes);

app.get('/', (req, res) => res.send('Customs Broker API Running'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});