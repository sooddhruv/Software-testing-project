const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
var bodyParser = require("body-parser");

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.2rvjc.mongodb.net/node-tuts?retryWrites=true&w=majority';


//online connection
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => app.listen(3000))
//     .catch(err => console.log(err));




//offline connection
app.listen(3000);
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback) {
    console.log("connection succeeded");
})




// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
app.get('/', (req, res) => {
    res.redirect('/index');
});

// app.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
// });

// blog routes
app.use('/blogs', blogRoutes);

app.post('/sign_up', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var pass = req.body.password;


    var data = {
        "name": name,
        "email": email,
        "password": pass,

    }
    db.collection('details').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });



    return res.redirect('/signup_success');
});

app.post('/payments', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var amount = req.body.amount;
    var phone = req.body.phone;

    var data = {
        "name": name,
        "email": email,
        "amount": amount,
        "phone": phone

    }
    db.collection('payment').insertOne(data, function(err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });



    return res.redirect('/payment_success');

});


app.get('/index', (req, res) => {
    res.render('./frontend/index', { title: 'main' });
});
app.get('/signup_success', (req, res) => {
    res.render('./frontend/signup_success', { title: 'Success' });
});
app.get('/signup', (req, res) => {
    res.render('./frontend/signup', { title: 'Signup/Login' });
});
app.get('/HelpAgeIndia', (req, res) => {
    res.render('./frontend/HelpAgeIndia', { title: 'HelpAgeIndia' });
});
app.get('/blog', (req, res) => {
    res.render('./frontend/blog', { title: 'Blog' });
});
app.get('/shoppingindex', (req, res) => {
    res.render('./frontend/shoppingindex', { title: 'Cart' });
});
app.get('/checkout', (req, res) => {
    res.render('./frontend/checkout', { title: 'Checkout' });
});
app.get('/weather', (req, res) => {
    res.render('./frontend/weather', { title: 'Weather' });
});
app.get('/payment', (req, res) => {
    res.render('./frontend/payment', { title: 'Payment' });
});

app.get('/payment_success', (req, res) => {
    res.render('./frontend/payment_success', { title: 'payment_success' })
})

app.get('/moreinfo', (req, res) => {
    res.render('./frontend/moreinfo', { title: 'Info' });
});
app.get('/moreinfo1', (req, res) => {
    res.render('./frontend/moreinfo1', { title: 'Info1' });
});
app.get('/moreinfo2', (req, res) => {
    res.render('./frontend/moreinfo2', { title: 'Info2' });
});



// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});