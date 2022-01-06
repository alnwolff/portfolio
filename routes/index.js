const Project = require("../models/Project");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.post("/add", (req, res, next) => {
  const {
    name,
    techUsed,
    releaseDate,
    credit,
    screenshotUrl,
    videoUrl,
    details,
  } = req.body;

  Project.create({
    name,
    techUsed,
    releaseDate,
    credit,
    screenshotUrl,
    videoUrl,
    details,
  })
    .then((createdProject) => {
      return res.status(200).json(createdProject);
    })
    .catch((err) => {
      res.json(err);
    });
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
