const express = require("express");
const cors = require("cors");
const btsRoutes = require("./routes/bts");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/bts", btsRoutes);

app.get("/", (req, res) => {
  res.send("💜 Borahae BTS API running — 방탄소년단");
});

app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
