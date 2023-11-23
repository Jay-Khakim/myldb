import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import bookRoutes from "./routes/bookRoutes.js" 
const port = process.env.PORT || 5000;

connectDB(); // connect to database

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/books', bookRoutes);

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 