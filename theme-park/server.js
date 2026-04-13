const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json())

const rideRoutes = require("./routes/rideRoutes")
app.use("/rides", rideRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))

app.listen(3000, () => {
  console.log("Server running")
})
