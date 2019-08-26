import { success, notFound } from '../../services/response/'
import { Option } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Option.create(body)
    .then((option) => option.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Option.find(query, select, cursor)
    .then((options) => options.map((option) => option.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Option.findById(params.id)
    .then(notFound(res))
    .then((option) => option ? option.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Option.findById(params.id)
    .then(notFound(res))
    .then((option) => option ? Object.assign(option, body).save() : null)
    .then((option) => option ? option.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Option.findById(params.id)
    .then(notFound(res))
    .then((option) => option ? option.remove() : null)
    .then(success(res, 204))
    .catch(next)
