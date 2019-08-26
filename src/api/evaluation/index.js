import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Evaluation, { schema } from './model'

const router = new Router()
const { id_prof, id_mentor, pending, final } = schema.tree

/**
 * @api {post} /evaluations Create evaluation
 * @apiName CreateEvaluation
 * @apiGroup Evaluation
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam id_prof Evaluation's id_prof.
 * @apiParam id_mentor Evaluation's id_mentor.
 * @apiParam pending Evaluation's pending.
 * @apiParam final Evaluation's final.
 * @apiSuccess {Object} evaluation Evaluation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Evaluation not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ id_prof, id_mentor, pending, final }),
  create)

/**
 * @api {get} /evaluations Retrieve evaluations
 * @apiName RetrieveEvaluations
 * @apiGroup Evaluation
 * @apiUse listParams
 * @apiSuccess {Object[]} evaluations List of evaluations.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /evaluations/:id Retrieve evaluation
 * @apiName RetrieveEvaluation
 * @apiGroup Evaluation
 * @apiSuccess {Object} evaluation Evaluation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Evaluation not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /evaluations/:id Update evaluation
 * @apiName UpdateEvaluation
 * @apiGroup Evaluation
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam id_prof Evaluation's id_prof.
 * @apiParam id_mentor Evaluation's id_mentor.
 * @apiParam pending Evaluation's pending.
 * @apiParam final Evaluation's final.
 * @apiSuccess {Object} evaluation Evaluation's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Evaluation not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ id_prof, id_mentor, pending, final }),
  update)

/**
 * @api {delete} /evaluations/:id Delete evaluation
 * @apiName DeleteEvaluation
 * @apiGroup Evaluation
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Evaluation not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
