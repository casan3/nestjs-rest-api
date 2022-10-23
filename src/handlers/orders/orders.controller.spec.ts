import { Test, TestingModule } from '@nestjs/testing';
/* import { array } from 'yargs'; */
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

jest.mock('./orders.service');

describe('OrdersController', () => {
  let ordersController: OrdersController;
  /* let ordersService: OrdersService; */

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService],
    }).compile();

    ordersController = app.get<OrdersController>(OrdersController);
    /* ordersService = app.get<OrdersService>(OrdersService); */
  });

  describe('Orders controller', () => {
    it('should be defined', () => {
      expect(ordersController).toBeDefined();
    });
  });

  describe('getOrders', () => {
    it('should return an array', () => {
      expect(ordersController.getOrders()).toEqual([]);
    });
  });
});
