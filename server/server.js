const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/user-controller.js');
const expenseCtrl = require('./controllers/expense-controller.js');
const passport = require('passport');
const path = require('path');

app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './../index.html'));
});

app.post('/login',
  passport.authenticate('local'),
	(req, res) => {
		res.status(200).json({
			status: 'Login successful!',
			income: req.user.income,
			username: req.user.username,
		});
	}
);

// user api
app.post('/signup', userCtrl.signup);
app.get('/api/user/:username', userCtrl.getUser);

// expenses api
app.get('/api/user/:username/expense', expenseCtrl.getAll);
app.post('/api/user/:username/expense', expenseCtrl.create);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.listen(3000, () => {
  console.log('serving port 3000..');
});
