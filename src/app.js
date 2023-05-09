const express = require('express');
const app = express();
const patientsRoutes = require("./api/routes/patients");
const swaggerUi = require('swagger-ui-express');
const yamljs = require('yamljs');

const path = require('path');
const swagger_path =  path.resolve(__dirname,'./swagger.yaml');
const swaggerDocument = yamljs.load(swagger_path);

// Setting Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Allow the access to the API from other sites
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routing
app.use('/patients', patientsRoutes);

// Error Messages
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;