const express = require("express");
const users = require("../routes/api/users");
const profile = require("../routes/api/profile");
const posts = require("../routes/api/posts");

module.exports = (app) => {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/profile", profile);
  app.use("/api/posts", posts);
};
