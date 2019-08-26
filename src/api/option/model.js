import mongoose, { Schema } from 'mongoose'

const optionSchema = new Schema({
  value: {
    type: String
  },
  name: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

optionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      value: this.value,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Option', optionSchema)

export const schema = model.schema
export default model
