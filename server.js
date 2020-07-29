const express = require('express');

const app = express();

app.use(express.static('./dist/ClickAndGo'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/ClickAndGo/' }
    );
});

app.listen(process.env.PORT || 8080);