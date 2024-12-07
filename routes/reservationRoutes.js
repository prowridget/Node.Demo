const express = require('express');
const { createReservation, getReservations } = require('../controllers/reservationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createReservation);
router.get('/', protect, getReservations);

module.exports = router;
