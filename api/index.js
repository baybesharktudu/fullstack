// IMPORT
import express from "express";
import authRoute from "./routes/auth.route.js"
import mongoose from "mongoose";

// CONFIG
const app = express()
app.use(express.json())

// ROUTES
app.use("/api/auth", authRoute)

// CONNECTED DATABASE
mongoose
    .connect('mongodb://localhost:27017/fullstack')
    .then(() => console.log(`Connect mongodb success`))
    .catch((error) => console.log(error));
    
// RUN APP
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

//