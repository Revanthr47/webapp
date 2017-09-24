var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var articles={
	'article-one' : {
		title : 'Article One',
		heading : 'Article One',
		date: '11-09-2017',
		content: 'this is my first article'},
	'article-two' : {
		title : 'Article Two',
		heading : 'Article Two',
		date: '11-09-2017',
		content: 'this is my second article'},
	'article-three' : {
		title : 'Article Three',
		heading : 'Article Three',
		date: '11-09-2017',
		content: 'this is my Third article'}
};

function createTemplate (data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var HtmlTemplate=`
                    <html>
                    <head>
                	<title>
                    	    ${title}
                    	</title>
                    	<meta name="viewport" content="width=device-width, initial-scale=1"/>
                    	<link href="/ui/style.css" rel="stylesheet" />
                    </head>
                        
                    <body>
                        		<div class="container">
                            		<div>
                            			<a href="/">HOME</a>

                            		</div>
                            		   <hr/>
                            			    <h3> 
                            		    	${heading}
                            		    	</h3>
                                			<div>
                                			${date}
                                			</div>
                                			<hr/>
                                			<div>
                            		    	${content}
                            		    	</div><hr/>
                            		    	                        			       
                        			     
                    </body>
                    </html>
                    `;
                    return HtmlTemplate;}

app.get('/:articleName', function(req,res){
 var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function(req,res){
 res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
