<<<<<<< HEAD
import express from "express";
import rootRouter from "./routes/root.js";

const app = express();
const port = 3000;

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware xử lý dữ liệu POST
app.use(express.urlencoded({ extended: true }));

// Đăng ký router
app.use("/", rootRouter);

// Khởi chạy server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
=======
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Booking = require('./models/Booking');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost:27017/data')
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));


app.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.render('index', { bookings });
});

//dat cho~
app.get('/new', (req, res) => {
  res.render('new');
});

//xu ly cho moi'
app.post('/new', async (req, res) => {
  const { customerName, date, time } = req.body;
  const newBooking = new Booking({ customerName, date, time });
  await newBooking.save();
  res.redirect('/');
});

//sua? dat. cho~
app.get('/edit/:id', async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.render('edit', { booking });
});

// xl dat cho~
app.post('/edit/:id', async (req, res) => {
  const { customerName, date, time } = req.body;
  await Booking.findByIdAndUpdate(req.params.id, { customerName, date, time });
  res.redirect('/');
});

//huy? cho~
app.post('/cancel/:id', async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, { status: 'Cancelled' });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
>>>>>>> 82a6943bbb4e90588067b39085170b646248a205
});
