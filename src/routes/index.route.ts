import { Router, Request, Response } from 'express';
import { Routes } from '@interfaces/routes.interface';


export class IndexRoute implements Routes {
  public path = '/index';
  public router = Router();


  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, (req: Request, res: Response) => {
      res.status(200).send('Success');
    });
  }
}
