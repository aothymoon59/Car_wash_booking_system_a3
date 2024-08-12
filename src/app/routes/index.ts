import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

export default router;
