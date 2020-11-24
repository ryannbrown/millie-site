const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
var Client = require("ftp");
var fs = require("fs");

const app = express();
const port = process.env.PORT || 5000;

const nodemailer = require("nodemailer");
const morgan = require("morgan");
const router = require("express").Router();
const path = require("path");
// aws bucket
const AWS = require("aws-sdk");
require("dotenv").config();
const Busboy = require("busboy");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const cors = require("cors");
const hsts = require('hsts')

// Strict-Transport-Security: max-age: 15552000; includeSubDomains
app.use(cors());

app.use(morgan("dev"));

app.use(busboy());
app.use(busboyBodyParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var knex = require("knex")({
  client: "pg",
  connection: process.env.CONNSTRING,
  searchPath: ["knex", "public"],
});

// GET CUSTOM INVENTORY
app.get("/api/getWorks", cors(), function (req, response) {
  knex
    .select()
    .from("works")
    .returning("*")
    .orderBy("id")
    .then((data) => {
      response.send(JSON.stringify({ data }));
    });
});
// GET CUSTOM INVENTORY
app.get("/api/getWork/:id", cors(), function (req, response) {
  const { id } = req.params;
  knex
    .select()
    .from("works")
    .returning("*")
    .where("id", id)
    .then((data) => {
      response.send(JSON.stringify({ data }));
    });
});

app.post("/api/addWork", function (req, res) {
  const { title, image, richBody } = req.body;
  console.log(title, image, richBody);
  knex("works")
    .insert({
      date: new Date(),
      title: title,
      image: image,
      richbody: richBody,
    })
    .then(res.send("POST request to the homepage"));

  posts.push(data);
});
app.post("/api/updateWork", function (req, res) {
  const { id, title, richBody } = req.body;
  knex("works")
    .where("id", id)
    .update({
      title: title,
      richbody: richBody,
    })
    .then(res.send("POST request to the homepage"));

  // posts.push(data)
});
app.post("/api/addImg", function (req, res) {
  const { id, image } = req.body;
  knex("works")
    .where("id", id)
    .update({
      imgs: knex.raw("array_append(imgs, ?)", [image]),
    })
    .then(res.send("POST request to the homepage"));
});
app.post("/api/deleteImg", function (req, res) {
  const { id, image } = req.body;
  knex("works")
    .where("id", id)
    .update({
      imgs: knex.raw("array_remove(imgs, ?)", [image]),
    })
    .then(res.send("POST request to the homepage"));
});

app.delete("/api/deleteWork", function (req, response) {
  // console.log("hiiiii")
  const id = req.body.id;
  // console.log(id)
  console.log(id);
  knex("works").where("id", id).del().then(response.send("deleted item"));
});

const BUCKET_NAME = process.env.NAME;
const ACCESS = process.env.ACCESS;
const SECRET = process.env.SECRET;

// TODO: be able to remove pictures from S3 programmatically?
function uploadToS3(file) {
  let s3bucket = new AWS.S3({
    accessKeyId: ACCESS,
    secretAccessKey: SECRET,
    Bucket: BUCKET_NAME,
  });
  s3bucket.createBucket(function () {
    var params = {
      Bucket: BUCKET_NAME,
      Key: file.name,
      Body: file.data,
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log("error in callback");
        console.log(err);
      }
      console.log("success");
      console.log(data);
    });
  });
}

app.post("/api/upload", function (req, res, next) {
  console.log("body", req.body);
  // console.log("req", req)
  const element1 = req.body.element1;
  console.log(element1);
  var busboy = new Busboy({ headers: req.headers });

  // The file upload has completed
  busboy.on("finish", function () {
    console.log("Upload finished");
    const file = req.files.element1;
    console.log(file);

    uploadToS3(file);
  });

  req.pipe(busboy);
});

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
  app.use(hsts({
    maxAge: 15552000  // 180 days in seconds
  }))
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
// console.log('Application running!' + cluster.worker.id);
// }
