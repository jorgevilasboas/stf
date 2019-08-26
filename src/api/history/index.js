import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export History, { schema } from './model'

const router = new Router()
const { id_eva, id_item, id_option } = schema.tree

/**
 * @api {post} /histories Create history
 * @apiName CreateHistory
 * @apiGroup History
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam id_eva History's id_eva.
 * @apiParam id_item History's id_item.
 * @apiParam id_option History's id_option.
 * @apiSuccess {Object} history History's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 History not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ id_eva, id_item, id_option }),
  create)

/**
 * @api {get} /histories Retrieve histories
 * @apiName RetrieveHistories
 * @apiGroup History
 * @apiUse listParams
 * @apiSuccess {Object[]} histories List of histories.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /histories/:id Retrieve history
 * @apiName RetrieveHistory
 * @apiGroup History
 * @apiSuccess {Object} history History's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 History not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /histories/:id Update history
 * @apiName UpdateHistory
 * @apiGroup History
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam id_eva History's id_eva.
 * @apiParam id_item History's id_item.
 * @apiParam id_option History's id_option.
 * @apiSuccess {Object} history History's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 History not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ id_eva, id_item, id_option }),
  update)

/**
 * @api {delete} /histories/:id Delete history
 * @apiName DeleteHistory
 * @apiGroup History
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 History not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
