var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser'),
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
        res.render('main page', {});
    });

    app.get('/EducationandWorkExperience',function(req,res){
        res.render('education', {});
    });
    app.get('/other',function(req,res){
        res.render('other', {});
    });
    

    var port = Number(process.env.PORT || 3000);
    var server = app.listen(port, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });