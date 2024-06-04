const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', (req, res) => {
    res.json('API SERVER FOR NextGen Realty');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});