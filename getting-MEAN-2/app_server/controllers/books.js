/* GET 'home' page */
const homelist = function(req, res){
res.render('books-list', { 
	title: 'WEB Library - Find your favourite books!',
	pageHeader: {
		title: 'WEBLibrary',
		strapline: 'Find your favourite books!'
	},
	sidebar: "We are dedicated to improving the lives of kids and families by providing the trustworthy information of different books.",
	books: [{ 
	name: 'Black Butterfly',
	author: 'Robert M. Drake',
	rating: 3,
	categories: ['Poetry'],
	published: '2015'
	/*image: */
	},{
	name: 'To Kill a Mockingbird',
	author: 'Harper Lee',
	rating: 5,
	categories: ['Novel'],
	published: '1969'
	},{
	name: 'The Hunger Games',
	author: 'Suzanne Collins',
	rating: 4,
	categories: ['Fantasy','Fiction','Drama'],
	published: '1997'
	}]
});
};


/* GET 'Book info' page */
const bookInfo = function(req, res){
res.render('book-info', { 
	title: 'Black Butterfly',
    pageHeader: {
      title: 'Black Butterfly'
    },
    sidebar: {
      context: ': The Black Butterfly is a symbol of transformation and rebirth after death. ... This book is a collection of memories and experiences Drake lived after the death of one of his brothers. He promised he would write him a few words after he failed to complete the task while his brother was alive.',
      callToAction: 'If you\'ve read the book and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    book: {
      name: 'Black Butterfly',
	  author: 'Robert M. Drake',
      rating: 3,
      categories: ['Poetry'],
      published: '2015',	  
	  
      reviews: [{
        customer: 'Melanie A',
        rating: 5,
        timestamp: 'Feb 10, 2019',
        reviewText: 'Aside from the actual content, the physical copy of this book is just beautiful. I had never seen any book designed in the way this one is. Every couple pages would be white text on black paper and different illustration done in purely black and white. So interesting and cool.'
      }, {
        customer: 'Adeeb',
        rating: 5,
        timestamp: 'Mar 15, 2018',
        reviewText: 'I’m very picky about poetry books, but this was surprisingly really well-written and relatable. I really enjoyed this and I hope to read more of his poetry collections.'
      }]
    }
  });
};
/* GET 'Add review' page */
const addReview = function(req, res){
res.render('book-review-form', {
    title: 'Review Black Butterfly on WEBLibrary',
    pageHeader: { title: 'Review Black Butterfly' }
  });
};

module.exports = {
homelist,
bookInfo,
addReview
};

