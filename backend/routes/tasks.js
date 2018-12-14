const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const
db = mongojs(
  "tasklist",
  ["tasks"]
);

//Get All Tasks
router.get('/tasks', (req, res, next) => {
  db.tasks.find({}, {_id: 1, title: 1}, (err, tasks) => {
    if (err) {
      res.send(err);
    }
    let data = [];
    Object.keys(tasks).forEach(key => {
      let val = tasks[key];
      data.push(val.title, val._id)
    });
    res.send(data);
  });
});

//Add Data
router.post('/task', (req, res, next) => {
  let task = req.body;
  if (!task.title) {
    res.status(400);
    res.json({
      error: 'Bad Data'
    });
  } else {
    db.tasks.save(task, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
});

//Delete Task
router.delete('/task/id', (res, req, next) => {
  db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},
    (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
});

//Update Task
router.put('/task/:id', (req, res, next) => {
  let task = req.body;
  let updTask = {};

  if (task.title) {
    updTask.title = task.title;
  }

  if (!updTask) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    });
  } else {
    db.tasks.update({_id: mongojs.ObjectId(req.params.id)},
      updTask,
      {},
      (err, task) => {
        if (err) {
          res.send(err);
        }
        res.json(task);
      }
    )
  }
});

module.exports = router;