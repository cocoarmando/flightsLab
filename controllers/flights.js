const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
    addDestination,
    createTicket,
};

function createTicket(req, res) {
    req.body['flight'] = req.params.id

    const ticket = new Ticket(req.body)
    ticket.save(function(err){
        console.log(err)
        res.redirect(`/flights/${req.params.id}`)
    })
    

    // Flight.findById(req.params.id, function(err, flight){
    //     const newTicket = req.body
    //     newTicket.flight = flight._id

    //     flight.tickets.push(newTicket)
    //     console.log('THIS IS FLIGHT AFTER NEW TICKET', flight)
    //     flight.save(function(err){
    //         console.log(err)
    //         res.redirect(`/flights/${newTicket.flight}`)
    //     })
    // })
}

function addDestination(req, res) {
    console.log(req.body)
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err){
            console.log(flight)
            res.redirect('/flights')
        })
    })
}


function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log('THIS IS Tickets', tickets)
            res.render('flights/show', {flight, title: 'Flight Show Page', tickets});


        })
        
    })
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        
        res.render('flights/index', {flights});

    });
}

function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('/flights');
    });


}

function newFlight(req, res) {
    res.render('flights/new');

}