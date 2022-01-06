const Project = require("../models/Project");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  Project.find()
    .then((allProjects) => {
      return res.status(200).json(allProjects);
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    .then((projectFromDB) => {
      return res.status(200).json(projectFromDB);
    })
    .catch((err) => {
      next(err);
    });
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
      next(err);
    });
});

module.exports = router;
