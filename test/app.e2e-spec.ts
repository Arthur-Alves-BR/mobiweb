import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from './../src/app.module';
import { BrandModule } from './../src/brand/brand.module';
// import { BusinessModule } from './../src/business/business.module';

describe('Brands', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, BrandModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  }, 15000);

  it('GET ALL', () => {
    return request(app.getHttpServer()).get('/brands').expect(200);
  });

  it('GET ONE', () => {
    return request(app.getHttpServer()).get('/brands/1').expect(200);
  });

  it('PATCH', () => {
    return request(app.getHttpServer())
      .patch('/brands/1')
      .send({ name: 'Arthur' })
      .expect(200);
  });

  it('POST', () => {
    return request(app.getHttpServer())
      .post('/brands')
      .send({ name: 'Arthur' })
      .expect(201);
  });
});
