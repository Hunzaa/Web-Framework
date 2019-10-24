const mongoose = require('mongoose');
const Bk = mongoose.model('Book');

const booksCreate = function (req, res) {
Bk.create({ 
name: req.body.name,
author: req.body.author,
categories: req.body.categories.split(","), 
published: req.body.published, 
}, (err, book) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(book);
}
});
};
	
		
const booksListByPublished = function (req, res) {
res
.status(200)
.json({"status" : "success"});
	};
	
	
const booksReadOne = function(req, res) {
 if (req.params && req.params.bookid) {
    Bk
      .findById(req.params.bookid)
      .exec((err, book) => {
        if (!book) {
          res	
            .status(404) 
            .json({	
              "message": "bookid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(book);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No bookid in request"
      });		
  }
};



const booksUpdateOne = function (req, res) { res
	if (!req.params.bookid) {
	res
		  .status(404)
		  .json({
			"message": "Not found, bookid is required"
		  });
	return;
	  }
	Bk
		.findById(req.params.bookid)
		.select('-reviews -rating')
		.exec((err, book) => {
	if (!book) {
	res
			  .json(404)
			  .status({
				"message": "bookid not found"
			  });
	return;
		  } else if (err) {
	res
			  .status(400)
			  .json(err);
	return;
		  }
	book.name = req.body.name;
	book.author = req.body.author;
	book.categories	= req.body.categories.split(",");
	book.published = req.body.published;
	book.save((err, book) => {
	if (err) {
	res
				.status(404)
				.json(err);
			} else {
	res
				.status(200)
				.json(book);
			}
		  });
		}
	  );
	};



//booksDeleteOne
const booksDeleteOne = function (req, res) {res
const bookid = req.params.bookid;
if (bookid) {
Bk
      .findByIdAndRemove(bookid) 
      .exec((err, book) => {
if (err) {
res
              .status(404)
              .json(err);
return;
          }
res
            .status(204)
            .json(null);
        }
    );
  } else {
res
      .status(404)
      .json({
        "message": "No bookid"
      });
  }
};




module.exports = {
  booksListByPublished,
  booksCreate,
  booksReadOne,
  booksUpdateOne,
  booksDeleteOne
};
