const express = require("express");  
const cors = require("cors");        
const bcrypt = require("bcrypt");    
const { v4: uuidv4 } = require("uuid");  

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, username, password } = req.body;
        const userId = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);
        res.json({ userId, firstName, lastName, username, password, hashedPassword });
    } catch (error) {
        res.json(error);
    }
});

// Define a /login route if needed
// app.post("/login", (req, res) => {
//    // Login logic here
// });

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});