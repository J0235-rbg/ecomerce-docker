import express from 'express';
import { container } from './container/container';
import { OrderController } from './controllers/OrderController';

const orderController = container.get(OrderController);

const app = express();
app.use(express.json());

app.post('/orders', orderController.processOrder);
app.get('/order/:id', orderController.getOrder);

export default app;
