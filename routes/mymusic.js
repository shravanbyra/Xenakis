var express = require('express');
var router = express.Router();

/*
var composer = '';
var beatsPerMinute = '';
var noteValue = '';
var keyNote = '';
var keySign = '';
var keyMajority = '';

app.post('/newdocument', function(req, res) {
	docTitle = req.body.title;
	composer = req.body.composer;
    beatsPerMinute = req.body.beatsPerMinute;
    noteValue = req.body.noteValue;
    keyNote = req.body.key;
    keySign = req.body.sign;
    keyMajority = req.body.majority;
	console.log(req.body);
});
*/

/* GET user's My Music page */
router.get('/', function(req, res, next) {
	res.render('mymusic', {
		title: 'My Music'
	});
});

/* GET selected Document */
router.get('/newdocument', function(req, res, next) {
	res.render('newdocument', {
		title: 'New Document',
		scripts: ['/js/editor.js'],
		notation: '',
		documentTitle: '',
		documentComposer: 'Someone',
		bpm: ''
	});
});

/* GET selected Document */
router.get('/document1', function(req, res, next) {
	res.render('document1', {
		title: 'Document 1',
		scripts: ['/js/editor.js']
	});
});

/* GET Create New Document page */
router.get('/createnewdocument', function(req, res, next) {
	res.render('createnew', {
		title: 'Create New Document',
	});
});

module.exports = router;
