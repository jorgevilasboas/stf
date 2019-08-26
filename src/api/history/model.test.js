import { History } from '.'

let history

beforeEach(async () => {
  history = await History.create({ id_eva: 'test', id_item: 'test', id_option: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = history.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(history.id)
    expect(view.id_eva).toBe(history.id_eva)
    expect(view.id_item).toBe(history.id_item)
    expect(view.id_option).toBe(history.id_option)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = history.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(history.id)
    expect(view.id_eva).toBe(history.id_eva)
    expect(view.id_item).toBe(history.id_item)
    expect(view.id_option).toBe(history.id_option)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
