import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces';

export interface IEntry extends Entry {}

const entrySchema: Schema<IEntry> = new Schema({
  description: { type: String, required: true },
  createAt: { type: Number, required: true, default: Date.now() },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} no es un estado permitido'
    },
    default: 'pending'
  }
});

const EntryModel: Model<Entry> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;
