// Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Get all comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      res.send(err);
    }
    res.json(comments);
  });
});

// Get single comment by id
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
});

// Create comment
router.post('/', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.send({ message: 'Comment Added' });
  });
});

// Update comment
router.put('/:id', function(req, res) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
});

// Delete comment
router.delete('/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, req.body, function(err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
});

module.exports = router;