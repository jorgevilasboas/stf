import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Item, { schema } from './model'

const router = new Router()
const { name, weight } = schema.tree

/**
 * @api {post} /items Create item
 * @apiName CreateItem
 * @apiGroup Item
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Item's name.
 * @apiParam weight Item's weight.
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ name, weight }),
  create)

/**
 * @api {get} /items Retrieve items
 * @apiName RetrieveItems
 * @apiGroup Item
 * @apiUse listParams
 * @apiSuccess {Object[]} items List of items.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /items/:id Retrieve item
 * @apiName RetrieveItem
 * @apiGroup Item
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /items/:id Update item
 * @apiName UpdateItem
 * @apiGroup Item
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam name Item's name.
 * @apiParam weight Item's weight.
 * @apiSuccess {Object} item Item's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Item not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ name, weight }),
  update)

/**
 * @api {delete} /items/:id Delete item
 * @apiName DeleteItem
 * @apiGroup Item
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Item not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
