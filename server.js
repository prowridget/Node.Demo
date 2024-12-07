const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Đọc biến môi trường
dotenv.config();

// Kết nối MongoDB
connectDB();

const app = express();
app.use(express.json()); // Middleware để parse JSON

// Import các routes
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const reservationRoutes = require('./routes/reservationRoutes');

// Routes chính
app.get('/', (req, res) => res.send('API is running...'));

// Sử dụng các routes
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/reservations', reservationRoutes);

// Lắng nghe kết nối
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
