require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
// Enable CORS for all routes
app.use(cors());
const port = process.env.PORT || 4000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const dbConnection = require("./db/dbConfig");
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoute");
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/answers", answerRoutes);
async function start() {
  try {
    const result = await dbConnection.execute("select 'test' ");
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.log(error.message);
  }
}
start();