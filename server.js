// express to communicate with FE
const express = require("express");
const path = require("path");

// "fs" for make modification in the file
const fs = require("fs");

// define express server with port
const app = express();
const PORT = process.env.PORT || 5001;

let notesData = [];

// Set up route 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Develop/public")));

// routes

// api call response for the note taken to send it to user
app.get("/api/notes", function(err, res) {
    try {
        notesData = fs.readFileSync("./Develop/db/db.json", "utf8");
        console.log("Bravo, it is working!");
        notesData = JSON.parse(notesData);

        // take not for error
    } catch (err) {
        console.log("\n error (in app.get.catch):");
        console.log(err);
    }
    res.json(notesData);
});

// user enter the note
app.post("/api/notes", function(req, res) {
    try {
        notesData = fs.readFileSync("./Develop/db/db.json", "utf8");
        console.log(notesData);
        notesData = JSON.parse(notesData);
        req.body.id = notesData.length;
        notesData.push(req.body);
        notesData = JSON.stringify(notesData);
        fs.writeFile("./Develop/db/db.json", notesData, "utf8", function(err) {
            if (err) throw err;
        });
        res.json(JSON.parse(notesData));

        // if error
    } catch (err) {
        throw err;
        console.error(err);
    }
});

// Delete data
app.delete("/api/notes/:id", function(req, res) {
    try {
        notesData = fs.readFileSync("./Develop/db/db.json", "utf8");
        notesData = JSON.parse(notesData);
        notesData = notesData.filter(function(note) {
            return note.id != req.params.id;
        });
        notesData = JSON.stringify(notesData);
        fs.writeFile("./Develop/db/db.json", notesData, "utf8", function(err) {
            if (err) throw err;
        });
        res.send(JSON.parse(notesData));
    } catch (err) {
        throw err;
        console.log(err);
    }
});

//HTML requests
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"));
});

app.get("/api/notes", function(req, res) {
    return res.sendFile(path.json(__dirname, "./Develop/db/db.json"));
});

app.listen(PORT, function() {
    console.log("SERVER IS LISTENING: " + PORT);
});