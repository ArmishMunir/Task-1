const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");

// middleware.
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

// Mongo db connection.
connectDB();

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
