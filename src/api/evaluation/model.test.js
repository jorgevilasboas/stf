import { Evaluation } from '.'

let evaluation

beforeEach(async () => {
  evaluation = await Evaluation.create({ id_prof: 'test', id_mentor: 'test', pending: 'test', final: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = evaluation.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(evaluation.id)
    expect(view.id_prof).toBe(evaluation.id_prof)
    expect(view.id_mentor).toBe(evaluation.id_mentor)
    expect(view.pending).toBe(evaluation.pending)
    expect(view.final).toBe(evaluation.final)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = evaluation.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(evaluation.id)
    expect(view.id_prof).toBe(evaluation.id_prof)
    expect(view.id_mentor).toBe(evaluation.id_mentor)
    expect(view.pending).toBe(evaluation.pending)
    expect(view.final).toBe(evaluation.final)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
