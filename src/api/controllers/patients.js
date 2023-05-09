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
    res.status(200).json({
        message: "List of Patients",
        patients: patients,
    })
};