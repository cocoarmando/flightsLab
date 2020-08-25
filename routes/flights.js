var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights.js');

router.get('/', flightsCtrl.index);

router.get('/:id', flightsCtrl.show);

// GET /flights/new
router.get('/new', flightsCtrl.new);

// post /flights
router.post('/', flightsCtrl.create);



// post a destination for a flight
// need to add the controller
router.post('/:id/destinations', flightsCtrl.addDestination);
  



module.exports = router;
