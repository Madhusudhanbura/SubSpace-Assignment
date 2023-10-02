const app = require("express")();
const blogRouter = require("./routes/getBlogStats");
const searchRouter = require("./routes/searchBlogs");
const bodyparser = require("body-parser");

app.use(bodyparser.json());

app.use("/api", blogRouter);
app.use("/api", searchRouter);

app.listen(3000, () => {
  console.log("server listening");
});
