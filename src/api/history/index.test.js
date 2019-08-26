import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { History } from '.'

const app = () => express(apiRoot, routes)

let history

beforeEach(async () => {
  history = await History.create({})
})

test('POST /histories 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, id_eva: 'test', id_item: 'test', id_option: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_eva).toEqual('test')
  expect(body.id_item).toEqual('test')
  expect(body.id_option).toEqual('test')
})

test('POST /histories 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /histories 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /histories/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${history.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(history.id)
})

test('GET /histories/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /histories/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${history.id}`)
    .send({ access_token: masterKey, id_eva: 'test', id_item: 'test', id_option: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(history.id)
  expect(body.id_eva).toEqual('test')
  expect(body.id_item).toEqual('test')
  expect(body.id_option).toEqual('test')
})

test('PUT /histories/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${history.id}`)
  expect(status).toBe(401)
})

test('PUT /histories/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, id_eva: 'test', id_item: 'test', id_option: 'test' })
  expect(status).toBe(404)
})

test('DELETE /histories/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${history.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /histories/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${history.id}`)
  expect(status).toBe(401)
})

test('DELETE /histories/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
