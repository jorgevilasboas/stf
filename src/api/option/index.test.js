import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Option } from '.'

const app = () => express(apiRoot, routes)

let option

beforeEach(async () => {
  option = await Option.create({})
})

test('POST /options 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, value: 'test', name: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.value).toEqual('test')
  expect(body.name).toEqual('test')
})

test('POST /options 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /options 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /options/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${option.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(option.id)
})

test('GET /options/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /options/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${option.id}`)
    .send({ access_token: masterKey, value: 'test', name: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(option.id)
  expect(body.value).toEqual('test')
  expect(body.name).toEqual('test')
})

test('PUT /options/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${option.id}`)
  expect(status).toBe(401)
})

test('PUT /options/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, value: 'test', name: 'test' })
  expect(status).toBe(404)
})

test('DELETE /options/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${option.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /options/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${option.id}`)
  expect(status).toBe(401)
})

test('DELETE /options/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
