import { Item } from '.'

let item

beforeEach(async () => {
  item = await Item.create({ name: 'test', weight: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = item.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(item.id)
    expect(view.name).toBe(item.name)
    expect(view.weight).toBe(item.weight)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = item.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(item.id)
    expect(view.name).toBe(item.name)
    expect(view.weight).toBe(item.weight)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
