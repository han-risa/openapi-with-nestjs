/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PasiensModule } from './pasiens/pasiens.module';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PasiensModule],
      providers: [AppService],
    }).compile();
  });

  // describe('getHello', () => {
  //   it('should return "Hello World!"', () => {
  //     const appController = app.get(AppController);
  //     expect(appController.getHello()).toBe('Hello World!');
  //   });
  // });
});
