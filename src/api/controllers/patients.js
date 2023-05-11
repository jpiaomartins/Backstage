// Controllers Definitions for the Patients Routes
exports.patientsGET = (req, res, next) => {
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

exports.patientsPOST = (req, res, next) => {
    console.log(req.body);
    let {name, age, city} = req.body;
    console.log(name);
    console.log(age);
    console.log(city);
    if(name && age && city) {
        res.status(200).json({message: "User Created"})
    } else {
        res.status(400).json({message: "Unable to Create User"})
    }
};
