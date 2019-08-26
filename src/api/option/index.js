import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { master } from '../../services/passport'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Option, { schema } from './model'

const router = new Router()
const { value, name } = schema.tree

/**
 * @api {post} /options Create option
 * @apiName CreateOption
 * @apiGroup Option
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam value Option's value.
 * @apiParam name Option's name.
 * @apiSuccess {Object} option Option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Option not found.
 * @apiError 401 master access only.
 */
router.post('/',
  master(),
  body({ value, name }),
  create)

/**
 * @api {get} /options Retrieve options
 * @apiName RetrieveOptions
 * @apiGroup Option
 * @apiUse listParams
 * @apiSuccess {Object[]} options List of options.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /options/:id Retrieve option
 * @apiName RetrieveOption
 * @apiGroup Option
 * @apiSuccess {Object} option Option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Option not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /options/:id Update option
 * @apiName UpdateOption
 * @apiGroup Option
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiParam value Option's value.
 * @apiParam name Option's name.
 * @apiSuccess {Object} option Option's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Option not found.
 * @apiError 401 master access only.
 */
router.put('/:id',
  master(),
  body({ value, name }),
  update)

/**
 * @api {delete} /options/:id Delete option
 * @apiName DeleteOption
 * @apiGroup Option
 * @apiPermission master
 * @apiParam {String} access_token master access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Option not found.
 * @apiError 401 master access only.
 */
router.delete('/:id',
  master(),
  destroy)

export default router
