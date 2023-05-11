// Definition of the Routes for the Patients Info
const express = require('express');
const {patientsGET, patientsPOST} = require('../controllers/patients');
const router = express.Router();

// Route to get all Patients
router.get('/', patientsGET);
router.post('/', patientsPOST);

module.exports = router;