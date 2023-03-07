// Definition of the Routes for the Patients Info
const express = require('express');
const router = express.Router();

// Route to get all Patients
router.get('/', (req, res, next) => {
    let patients = [
        {
            name: "Joao",
            age: 29,
            city: "Lisboa",
        },
        {
            name: "Tiago",
            age: 93,
            city: "Porto",
        },
    ];
    res.status(200).json({
        message: "List of Patients",
        patients: patients,
    })

});

module.exports = router;