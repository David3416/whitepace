const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, '../frontend/views'));


app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});


