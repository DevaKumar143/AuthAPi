const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const authRoutes = require("./modules/auth/auth.route");
const errorMiddleware = require("./middlewares/error.middleware");

app.use(express.json());


main()
  .then((res) => {
    console.log("Connection Successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
}

app.use("/",authRoutes);
app.use(errorMiddleware);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
