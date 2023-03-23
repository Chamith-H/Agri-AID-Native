const express = require("express");
const app = express();

const http = require("http")

const cors = require("cors");
const mongoose = require("mongoose");
const clusterURL = "mongodb+srv://chamith:9875@ictech.ly0widm.mongodb.net/AgriAID"

app.use(cors());
app.use(express.json());

const server = http.createServer(app)
const chatRoom = require("./Routings/ChatData_Route")
chatRoom(server)

//Connect Database
mongoose.connect(clusterURL)  

//API paths
app.use("/", require("./Routings/UserData_Route"));
app.use("/", require("./Routings/CropData_Route"));
app.use("/", require("./Routings/Cultivation_Route"));
app.use("/", require("./Routings/HarvestRecord_Route"));

//Testing Back-End
app.listen(8000, '192.168.8.182', function() {
    console.log("ok running")
})

server.listen(3001, '192.168.8.182', function() {
    console.log("chat accepted")
})