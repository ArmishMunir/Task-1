const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8080;

// Mongo db connection.
connectDB();

app.use(express.json());
// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.unsubscribe("/api/profile", require("./routes/api/profile"));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
