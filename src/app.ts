import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
import notFound from './app/middlewares/notfound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const serverController = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: `Car Wash Management Server is running on port 🚀${config.port}🚀`,
  });
};

app.get('/', serverController);

//Not Found
app.use(notFound);

export default app;
