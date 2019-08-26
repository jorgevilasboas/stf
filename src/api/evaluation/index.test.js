import request from 'supertest'
import { masterKey, apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Evaluation } from '.'

const app = () => express(apiRoot, routes)

let evaluation

beforeEach(async () => {
  evaluation = await Evaluation.create({})
})

test('POST /evaluations 201 (master)', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ access_token: masterKey, id_prof: 'test', id_mentor: 'test', pending: 'test', final: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.id_prof).toEqual('test')
  expect(body.id_mentor).toEqual('test')
  expect(body.pending).toEqual('test')
  expect(body.final).toEqual('test')
})

test('POST /evaluations 401', async () => {
  const { status } = await request(app())
    .post(`${apiRoot}`)
  expect(status).toBe(401)
})

test('GET /evaluations 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /evaluations/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${evaluation.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(evaluation.id)
})

test('GET /evaluations/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /evaluations/:id 200 (master)', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${evaluation.id}`)
    .send({ access_token: masterKey, id_prof: 'test', id_mentor: 'test', pending: 'test', final: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(evaluation.id)
  expect(body.id_prof).toEqual('test')
  expect(body.id_mentor).toEqual('test')
  expect(body.pending).toEqual('test')
  expect(body.final).toEqual('test')
})

test('PUT /evaluations/:id 401', async () => {
  const { status } = await request(app())
    .put(`${apiRoot}/${evaluation.id}`)
  expect(status).toBe(401)
})

test('PUT /evaluations/:id 404 (master)', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ access_token: masterKey, id_prof: 'test', id_mentor: 'test', pending: 'test', final: 'test' })
  expect(status).toBe(404)
})

test('DELETE /evaluations/:id 204 (master)', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${evaluation.id}`)
    .query({ access_token: masterKey })
  expect(status).toBe(204)
})

test('DELETE /evaluations/:id 401', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${evaluation.id}`)
  expect(status).toBe(401)
})

test('DELETE /evaluations/:id 404 (master)', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
    .query({ access_token: masterKey })
  expect(status).toBe(404)
})
