const config = require('config');
const YAML = require('yamljs');
const logger = require('./logger.js')
const express = require('express');
const cors = require('cors');
const morgan = require("morgan");
const mongoose = require('mongoose');

const authHandlers = require('./auth/authHandlers');
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly.js');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./docs/swagger.yaml');

const { username, password, host, database, parameters }
    = config.get('database');
const login = username ? `${username}:${password}@` : ''

const mongooseConnect = () => {
    return mongoose
        .connect(`mongodb+srv://${login}${host}/${database}?${parameters}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => logger.info(
            "MongoDB connection has been established successfully"))
        .catch(err => {
            logger.error(
                `Cannot connect to MongoDB: ${err}\nServer is stopping...`)
            process.exit()
        })
}

const app = express();
app.use(morgan('tiny', { stream: logger.stream }));

app.use(cors());
app.use(express.json())
app.use(express.static('public')); 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/login', authHandlers.login);
app.post('/refresh', authHandlers.refresh);
app.post('/logout', authHandlers.logout);

app.use('/song',
    require('./controller/song/router'));
app.use('/artist',
    // authenticateJwt, adminOnly,
    require('./controller/artist/router'));
app.use('/album',
    // authenticateJwt, adminOnly,
    require('./controller/album/router'));
app.use('/composer',
    authenticateJwt, adminOnly,
    require('./controller/composer/router'));
app.use('/lyricist',
    authenticateJwt, adminOnly,
    require('./controller/lyricist/router'));
app.use('/genre',
    authenticateJwt, adminOnly,
    require('./controller/genre/router'));

app.use('/', (req, res) =>
    res.send(`api server ${swaggerDocument.info.version}`));

app.use((err, req, res, next) => {
    logger.error(`ERROR ${err.statusCode}: ${err.message}`);
    statusCode = err.statusCode ? err.statusCode : 500
    res.status(statusCode);
    res.json({
        hasError: true,
        errorCode: statusCode,
        message: err.message
    });
});

module.exports = {
    mongooseConnect,
    app
};
