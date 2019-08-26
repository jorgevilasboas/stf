import mongoose, { Schema } from 'mongoose'

const evaluationSchema = new Schema({
  id_prof: {
    type: String
  },
  id_mentor: {
    type: String
  },
  pending: {
    type: String
  },
  final: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

evaluationSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id_prof: this.id_prof,
      id_mentor: this.id_mentor,
      pending: this.pending,
      final: this.final,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Evaluation', evaluationSchema)

export const schema = model.schema
export default model
