import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import bookRoutes from "./routes/bookRoutes.js"
import userRoutes from './routes/userRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import cors from 'cors' 
// const cors = require('cors');
const port = process.env.PORT || 5000;

connectDB(); // connect to database

const app = express();
app.use(cors({origin: true, credentials: true}));

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Cookie parser middleware
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/quotes', quoteRoutes);

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 