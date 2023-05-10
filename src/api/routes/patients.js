// Definition of the Routes for the Patients Info
const express = require('express');
const controllers = require('../controllers/patients');
const router = express.Router();

// Route to get all Patients
router.get('/', controllers.patientsGET);
router.post('/', controllers.patientsPOST);

module.exports = router;