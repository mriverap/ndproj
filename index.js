const express = require('express');
const app = express();
const config = require('config');

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Server Password: ' + config.get('mail.password'));

const home = require('./routes/home');
const genres = require('./routes/genres');

app.use('/api', home);
app.use('/api/genres', genres);

const port = process.env.port || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));