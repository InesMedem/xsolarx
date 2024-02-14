const {
  createComment,
  deleteComment,
  getAll,
  getById,
  update,
} = require("../controllers/Comment.controllers");

const CommentRoutes = require("express").Router();

CommentRoutes.post("/create", createComment);
CommentRoutes.delete("/:id", deleteComment);
CommentRoutes.get("/getall", getAll);
CommentRoutes.get("/getbyid/:id", getById);
CommentRoutes.patch("/update/:id", update);
module.exports = CommentRoutes;