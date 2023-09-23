import express from "express";
import carRouter from "./routes/cars.js";

const app = express();

app.use("/public", express.static("./public"));

app.use("/scripts", express.static("./public/scripts"));

const PORT = process.env.PORT || 3001;

app.use('/cars', carRouter)

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
