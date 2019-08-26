import mongoose, { Schema } from 'mongoose'

const historySchema = new Schema({
  id_eva: {
    type: String
  },
  id_item: {
    type: String
  },
  id_option: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

historySchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      id_eva: this.id_eva,
      id_item: this.id_item,
      id_option: this.id_option,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('History', historySchema)

export const schema = model.schema
export default model
