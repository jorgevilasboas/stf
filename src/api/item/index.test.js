import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Item } from '.'

const app = () => express(apiRoot, routes)

let item

beforeEach(async () => {
  item = await Item.create({})
})

test('POST /items 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, name: 'test', weight: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.weight).toEqual('test')
})

test('POST /items 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /items 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /items/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${item.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(item.id)
})

test('GET /items/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /items/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${item.id}`)
    .send({ access_token: masterKey, name: 'test', weight: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(item.id)
  expect(body.name).toEqual('test')
  expect(body.weight).toEqual('test')
})

test('PUT /items/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${item.id}`)
  expect(status).toBe(401)
})

test('PUT /items/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, name: 'test', weight: 'test' })
  expect(status).toBe(404)
})

test('DELETE /items/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${item.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /items/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${item.id}`)
  expect(status).toBe(401)
})

test('DELETE /items/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
