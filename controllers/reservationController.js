const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { service, date, time, numberOfPeople } = req.body;
  try {
    const reservation = await Reservation.create({
      user: req.user.id,
      service,
      date,
      time,
      numberOfPeople,
    });
    res.status(201).json(reservation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find({ user: req.user.id }).populate('service');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
