const Participant = require('../models/participant.model')

module.exports.getAll = async (req, res) => {
  try {
    const participants = await Participant.find()
    res.json(participants)
  } catch (e) {
    res.status(500).json(e)
  }
}

module.exports.create = async (req, res) => {
  const participant = new Participant({
    name: req.body.name,
    date: req.body.date,
    phone: req.body.phone,
    type: req.body.type,
    partner1: req.body.partner1,
    partner2: req.body.partner2,
  })

  try {
    await participant.save()

    res.status(201).json(participant)
  } catch (e) {
    res.status(500).json(e)
  }
}
