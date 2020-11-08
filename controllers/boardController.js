var Board = require("../models/board");
var Cell = require("../models/cell");

// Good validation documentation available at https://express-validator.github.io/docs/
const { body, validationResult } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");

/*
// Display the board
exports.index = function (req, res, next) {
  Board.find({}).exec(function (err, list_Boards) {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("Boards", { title: "Board List", Board_list: list_Boards });
  });
};
*/

// Reset the board
exports.reset = function (req, res, next) {
  //sanitizeBody('*').trim().escape();

  var board = new Board({ cells: [] });
  var cell;

  for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 5; j++) {
      cell = new Cell({ row: i, col: j, content: "" });
      cell.save(function (err) {
        if (err) {
          return next(err);
        }

        //Add created cell to the board
        board.cells.push(cell);
        board.save(function (err) {
          if (err) {
            return next(err);
          }
        });
      });
    }
  }
  /*
  // Create a Board object
  var Board = new Board(
    { content: req.body.content,
      author: req.body.author
    });

    Board.save(function (err) {
      if (err) { return next(err); }
      // Successful - redirect to new book record.
      res.redirect('/Boards');
    });
  */
};
