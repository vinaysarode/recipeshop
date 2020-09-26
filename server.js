  
const express = require('express');

const app = express();

app.use(express.static('./dist/recipeshopping'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/recipeshopping/'}),
);

app.listen(process.env.PORT || 8080);