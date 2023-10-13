import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ReservationRoutes } from '../modules/reservation/reservation.route';
import { FoodRoutes } from '../modules/food/food.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/reservation',
    route: ReservationRoutes,
  },
  {
    path: '/food',
    route: FoodRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
