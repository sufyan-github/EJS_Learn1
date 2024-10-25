const express = require('express');
const { pl } = require('faker/lib/locales');

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

let pLanguages = [];

app.get('/', (req, res) => {
    res.render("index", { plNames: pLanguages });
});

app.get('/contact', (req, res) => {
    res.render("contact", {});
})

app.post('/', (req, res) => {
    const pLanguage = req.body.pLanguage;
    pLanguages.push(pLanguage);
    res.redirect('/');
})

app.listen(port, function (error) {
    if (error) throw error;
    console.log("Server Run Success");
})