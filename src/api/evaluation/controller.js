import { success, notFound } from '../../services/response/'
import { Evaluation } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Evaluation.create(body)
    .then((evaluation) => evaluation.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Evaluation.find(query, select, cursor)
    .then((evaluations) => evaluations.map((evaluation) => evaluation.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Evaluation.findById(params.id)
    .then(notFound(res))
    .then((evaluation) => evaluation ? evaluation.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Evaluation.findById(params.id)
    .then(notFound(res))
    .then((evaluation) => evaluation ? Object.assign(evaluation, body).save() : null)
    .then((evaluation) => evaluation ? evaluation.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Evaluation.findById(params.id)
    .then(notFound(res))
    .then((evaluation) => evaluation ? evaluation.remove() : null)
    .then(success(res, 204))
    .catch(next)
