const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const routes = require('./app/routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3000, () => {
    console.log(`app is running on port 3000`);
});