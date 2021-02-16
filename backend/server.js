
const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const express = require('express');
require('./config/db');

const UsersRouter = require('./router/UsersRouter');

const server = express();
const router = express.Router();
const PORT = 8080;

server.use( express.json() );
server.use(express.static('public'))

server.use(cors ({
    origin: '*',
    optionsSuccessStatus: 200
}));

server.use('/api', router);
authRoutes(router);

server.get('/', (req, res)=>{
    res.send('Tout va bien');
});

server.use(UsersRouter.prefix, UsersRouter.router);

server.use(router);

server.listen(PORT, '127.0.0.1', ()=>{
    console.log('server running :)');
})
