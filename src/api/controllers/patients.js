// Controllers Definitions for the Patients Routes
const patientsGET = (req, res, next) => {
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
    res.status(200).json(patients)
};

const patientsPOST = (req, res, next) => {
    let {name, age, city} = req.body;
    if(name && age && city) {
        res.status(200).json("User Created")
    } else {
        res.status(400).json("Unable to Create User")
    }
};

exports.modules = {patientsGET, patientsPOST};