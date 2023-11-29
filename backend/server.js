import path from "path"
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import bookRoutes from "./routes/bookRoutes.js"
import userRoutes from './routes/userRoutes.js';
import quoteRoutes from './routes/quoteRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import authorRoutes from './routes/authorRoutes.js';
import borrowingsRoutes from './routes/borrowingRoutes.js';
import lendingRoutes from "./routes/lendingRoutes.js"
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

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/borrowings', borrowingsRoutes);
app.use('/api/lendings', lendingRoutes);

const __dirname = path.resolve(); //Set __dirname to current directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 