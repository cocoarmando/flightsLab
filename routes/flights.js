var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);

// GET /flights/new


// post /flights
router.post('/', flightsCtrl.create);

router.post('/:id/tickets', flightsCtrl.createTicket);



// post a destination for a flight
// need to add the controller
router.post('/:id/destinations', flightsCtrl.addDestination);
  



module.exports = router;
