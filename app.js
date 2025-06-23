const dotEnv = require("dotenv");
dotEnv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ConnectToDB = require("./config/db.config");
ConnectToDB();
const customerRouter = require("./Routes/Customer.routes");
const vendorRouter = require("./Routes/Vendor.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/customers", customerRouter);
app.use("/vendors", vendorRouter);

module.exports = app;
