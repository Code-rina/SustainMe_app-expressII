const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Comment } = require("../../db/models");

const router = express.Router();

//post
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, content } = req.body;
    console.log("userId and content: =>", userId, content);

    const comment = await Comment.create({ userId, content });

    if (comment) {
      return res.json({ comment });
    } else {
      return res.json({ message: "didnt work" });
    }
    //add data to Comment model
  })
);

module.exports = router;
