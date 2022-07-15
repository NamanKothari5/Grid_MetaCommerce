const mongoose = require("mongoose");
const categories = require("./categories");
const Schema2 = require("../models/category");
const Category = mongoose.model("products", Schema2);

mongoose.connect("mongodb://localhost:27017/newdb", {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  // await Category.deleteMany({});
  console.log(categories);
  console.dir(JSON.stringify(Category));
  for (let i = 0; i < 2; i++) {
    const category = new Category({
      title: `${categories[i].title}`,
      slug: `${categories[i].slug}`,
    });
    await category.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
