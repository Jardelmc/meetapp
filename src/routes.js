import UserController from './app/controllers/UserController';

const { Router } = require('express');

const routes = new Router();

routes.post('/users', UserController.store);

export default routes;
