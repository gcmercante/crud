import { DeveloperController } from '../controller/developer-controller';
import { Request, Response, Express } from 'express';

export default class Router {
    constructor(server: Express) {
        server.get('/version', (req: Request, res: Response) => res.send('v0.0.1'));
        
        server.get('/developers', (req: Request, res: Response) => {
            try {
                const result = new DeveloperController().getAll(req.query);
                if(result instanceof Promise) {
                    result.then(result => {
                        res.json(result);
                    })
                    .catch(err => {
                        res.send(err.message);
                    })
                }
            } catch (error) {
                res.send(error.message);
            }
        });

        server.get('/developers/:id', (req: Request, res: Response) => {
            try {
                const result = new DeveloperController().getDeveloper(req.params.id);
                if(result instanceof Promise) {
                    result.then(result => {
                        res.json(result);
                    })
                    .catch(err => {
                        res.send(err.message);
                    })
                }
            } catch (error) {
                res.send(error.message);
            }
        });

        server.post('/developers', (req: Request, res: Response) => {
            try {
                const result = new DeveloperController().add(req.body);
                if(result instanceof Promise) {
                    result.then(result => {
                        res.json(result);
                    })
                    .catch(err => {
                        res.send(err.message);
                    })
                }
            } catch (error) {
                res.send(error.message);
            }
        });

        server.put('/developers/:id', (req: Request, res: Response) => {
            try {
                const result = new DeveloperController().update(req.params.id, req.body);
                if(result instanceof Promise) {
                    result.then(result => {
                        res.json(result);
                    })
                    .catch(err => {
                        res.send(err.message);
                    });
                }
            } catch (error) {
                res.send(error.message);
            }
        });

        server.delete('/developers/:id', (req: Request, res: Response) => {
            try {
                const result = new DeveloperController().deleteDev(req.params.id);
                if(result instanceof Promise) {
                    result.then(result => {
                        res.json(result);
                    })
                    .catch(err => {
                        res.send(err.message);
                    });
                }
            } catch (error) {
                res.send(error.message);
            }
        })
    }
}