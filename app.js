const express = require("express");
const config = require("config");
const mongoose = require("mongoose"); 

const app = express();

const PORT =  config.get("port") || 5000;

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"), {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => {console.log(`Start on ${{PORT}} port...`)});
    } catch (error) {
        console.log("Server error", error.message);
        process.exit(1);
    };
};

start();