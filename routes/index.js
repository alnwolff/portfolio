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

router.post("/", (req, res, next) => {
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

router.put("/:id", (req, res, next) => {
  const {
    name,
    techUsed,
    releaseDate,
    credit,
    screenshotUrl,
    videoUrl,
    details,
  } = req.body;

  Project.findByIdAndUpdate(
    req.params.id,
    { name, techUsed, releaseDate, credit, screenshotUrl, videoUrl, details },
    { new: true }
  )
    .then((editedProject) => {
      res.status(200).json(editedProject);
    })
    .catch((err) => {
      next(err);
    });
});

router.delete("/:id", (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Project deleted successfully." });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
