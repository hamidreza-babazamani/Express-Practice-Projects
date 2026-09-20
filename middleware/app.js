const express = require("express");
// consr helmat = require("helmat")
const morgan = require("morgan");
const omitEmpty = require("omit-Empty");
const camelcasekey = (...args) =>
  import("camelcase-keys").then(({ default: camelcase }) => camelcase(...args));
const app = express();
app.use(morgan("tiny"));
app.use(morgan("combined"));
app.use(morgan(":method : url :status: res[content-type] - :response-time ms"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
function gettime(req, res, next) {
  req.time = Date.now();
  next();
}
app.use((req, res, next) => {
  gettime(req, res, next);
});
app.use(function (req, res, next) {
  console.log("log1");
  next();
});
function checkAuth(req, res, next) {
  const { username, password } = req.query;
  if (username == "hamidrez a" && password == "1234");
  {
    return next();
  }
  res.send("authentication is failed");
}
async function camelcase(req, res, next) {
  req.body = await camelcasekey(req.body, { deep: true });
  req.query = await camelcasekey(req.query);
  req.params = await camelcasekey(req.params);
  next();
}
function removeEmptyfields(options = {}) {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, options);
    next();
  };
}
app.use(camelcase);
app.get("/", (req, res, next) => {
  console.log("response route");
  res.send("finish request ");
});
app.get("/users", checkAuth, (req, res) => {
  console.log(req.time);
  res.send("users");
});
app.get("/blogs", async (req, res) => {
  res.send({
    body: req.body,
    query: req.query,
    params: req.params,
  });
});
app.post("/create", removeEmptyfields(), (req, res, next) => {
  res.send(req.body);
});
app.listen(3000, () => {
  console.log("server run on port 3000");
});
