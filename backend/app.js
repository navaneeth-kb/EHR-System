const express = require("express");
const cors = require("cors");

const patientRoutes = require("./routes/patient.routes");
const visitRoutes = require("./routes/visit.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/patients", patientRoutes);
app.use("/api/visits", visitRoutes);

app.use(errorHandler);

module.exports = app;
