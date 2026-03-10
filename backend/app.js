const express=require("express");
const cors=require("cors");

const contactRoutes=require("./routes/contactRoutes");
const devisRoutes=require("./routes/devisRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const notFound = require("./routes/notFound");

const rateLimiter=require("./middlewares/rateLimiter");
const errorHandler=require("./middlewares/errorHandler");

const app=express();

app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use("/api/contact",contactRoutes);
app.use("/api/devis",devisRoutes);
app.use("/api/payment", paymentRoutes);
app.use(notFound);

app.use(errorHandler);

module.exports=app;