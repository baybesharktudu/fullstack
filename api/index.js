// IMPORT
import express from "express";

// CONFIG
const app = express();

// ROUTES
app.get("/", (req, res) => {
    res.send("Hello 123123111 nerw")
})

// CONNECTED DATABASE

// RUN APP
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})