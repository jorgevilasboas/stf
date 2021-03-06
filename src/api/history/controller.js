import { success, notFound } from '../../services/response/'
import { History } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  History.create(body)
    .then((history) => history.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  History.find(query, select, cursor)
    .then((histories) => histories.map((history) => history.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  History.findById(params.id)
    .then(notFound(res))
    .then((history) => history ? history.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  History.findById(params.id)
    .then(notFound(res))
    .then((history) => history ? Object.assign(history, body).save() : null)
    .then((history) => history ? history.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  History.findById(params.id)
    .then(notFound(res))
    .then((history) => history ? history.remove() : null)
    .then(success(res, 204))
    .catch(next)
