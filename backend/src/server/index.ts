import * as express from 'express';
import * as cors from 'cors';
import { createConnection } from 'typeorm';

import Router from './router';
import { debug } from '../service/log';
const log = debug('server');

createConnection().then(() => {
    log('db connected');
    const port = process.env.PORT;
    const app = express();
    
    app.use(cors());

    app.use(express.json());
    
    app.listen(port);
    log(`backend listening at ${port}`)
    
    new Router(app);
}).catch(err => log(err));