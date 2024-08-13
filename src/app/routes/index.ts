import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { CarServiceRoutes } from '../modules/carService/carService.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/services',
    routes: CarServiceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
