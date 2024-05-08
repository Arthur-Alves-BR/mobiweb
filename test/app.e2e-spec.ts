import * as request from 'supertest';
import { Repository } from 'typeorm';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from './../src/app.module';
import { mainConfig } from './../src/main.config';
import { Brand } from './../src/brand/entities/brand.entity';
import { Business } from './../src/business/entities/business.entity';

describe('API tests', () => {
  let app: INestApplication;
  let createdBrand: Brand;
  let createdBusiness: Business;
  let brandRepository: Repository<Brand>;
  let businessRepository: Repository<Business>;

  beforeAll(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = testingModule.createNestApplication();
    mainConfig(app);

    brandRepository = await testingModule.get('BrandRepository');
    businessRepository = await testingModule.get('BusinessRepository');

    createdBusiness = await businessRepository.save({ name: 'Test Business' });
    createdBrand = await brandRepository.save({
      name: 'Test Brand',
      business: createdBusiness,
    });

    await app.init();
  }, 20000);

  afterAll(async () => {
    brandRepository.delete({});
    businessRepository.delete({});
  });

  describe('Brands', () => {
    const baseURL = '/brands';

    it('GET ALL', () => {
      return request(app.getHttpServer()).get(`${baseURL}`).expect(200);
    });

    it('GET ONE', () => {
      return request(app.getHttpServer())
        .get(`${baseURL}/${createdBrand.id}`)
        .expect(200);
    });

    it('VALID POST', () => {
      return request(app.getHttpServer())
        .post(`${baseURL}`)
        .send({
          name: 'Test',
          businessId: createdBusiness.id,
        })
        .expect(201);
    });

    it.each([
      {},
      { name: 123 },
      { name: 'Test1' },
      { name: 'Test2', businessId: '1' },
      { name: 'Test3', businessId: null },
    ])('INVALID POSTs', (data) => {
      return request(app.getHttpServer())
        .post(`${baseURL}`)
        .send(data)
        .expect(400);
    });

    it('VALID PATCH', async () => {
      return request(app.getHttpServer())
        .patch(`${baseURL}/${createdBrand.id}`)
        .send({ name: 'UPDATED' })
        .expect(200)
        .then((response) => {
          expect(response.body.name).toEqual('UPDATED');
        });
    });

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete(`${baseURL}/${createdBrand.id}`)
        .expect(200);
    });
  });

  describe('Business', () => {
    const baseURL = '/business';

    it('GET ALL', () => {
      return request(app.getHttpServer()).get(`${baseURL}`).expect(200);
    });

    it('GET ONE', () => {
      return request(app.getHttpServer())
        .get(`${baseURL}/${createdBusiness.id}`)
        .expect(200);
    });

    it('VALID POST', () => {
      return request(app.getHttpServer())
        .post(`${baseURL}`)
        .send({ name: 'Test' })
        .expect(201);
    });

    it.each([{}, { name: 123 }])('INVALID POSTs', (data) => {
      return request(app.getHttpServer())
        .post(`${baseURL}`)
        .send(data)
        .expect(400);
    });

    it('VALID PATCH', async () => {
      return request(app.getHttpServer())
        .patch(`${baseURL}/${createdBusiness.id}`)
        .send({ name: 'UPDATED' })
        .expect(200)
        .then((response) => {
          expect(response.body.name).toEqual('UPDATED');
        });
    });

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete(`${baseURL}/${createdBusiness.id}`)
        .expect(200);
    });
  });
});
