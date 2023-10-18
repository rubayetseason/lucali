"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const reservation_route_1 = require("../modules/reservation/reservation.route");
const food_route_1 = require("../modules/food/food.route");
const review_route_1 = require("../modules/review/review.route");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/reservation',
        route: reservation_route_1.ReservationRoutes,
    },
    {
        path: '/food',
        route: food_route_1.FoodRoutes,
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
