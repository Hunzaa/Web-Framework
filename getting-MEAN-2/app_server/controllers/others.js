/* GET home page */
const about = function(req, res){
  res.render('generic-text', { 
	title: 'About',
	content: 'WEB Library  rates books so parents can feel good about the entertainment choices they make for their kids. We offer the largest, most trusted library of independent age-based ratings and reviews. Our timely parenting advice supports families as they navigate the challenges and possibilities of raising kids in the digital age. \n\nLearn how to rate and review with these simple steps: \n1.	Go to our home page.\n2.	Click the name of book you’re interested in.\n3.	Now you can see detailed description of the book and see what others think about it.\n4.	If you want others to know you point of view then simply click “Add Review”\n5.	Fill out the details and you’re done.'
  });
};

module.exports = {
  about
};