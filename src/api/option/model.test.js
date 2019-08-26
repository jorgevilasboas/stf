import { Option } from '.'

let option

beforeEach(async () => {
  option = await Option.create({ value: 'test', name: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = option.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(option.id)
    expect(view.value).toBe(option.value)
    expect(view.name).toBe(option.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = option.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(option.id)
    expect(view.value).toBe(option.value)
    expect(view.name).toBe(option.name)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
