// import package
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

// Import internal functions
import UserDb from './config/UserDB.js';
import UserRoutes from './router/UserRoutes.js'



dotenv.config();

const server = express();
const PORT = process.env.PORT || 3400;

// Middleware 
server.use(express.json()); // Parse JSON requests
server.use(morgan('dev')); // Log requests to console


// Routes
server.get('/', (req, res) => {
    res.status(200).json({ message: "Hello, welcome to the server." });
});

server.use('/api/v1', UserRoutes);


// Connect to PostgreSQL Database
const dbConnect = async () => {
    try {
        await UserDb.connect();
        console.log('✅ Connected to PostgreSQL database');
    } catch (error) {
        console.error('❌ Error connecting to database:', error.message);
        process.exit(1);
    }
}
dbConnect();


// Start Server
server.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
