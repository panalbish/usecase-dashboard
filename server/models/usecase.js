import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UseCaseSchema = new Schema({
  title: String,
  body: String,
  milestones: [{
    id: Number,
    name: String,
    name_de: String,
    name_en: String,
    start_date: String,
    end_date: String,
    usecase: Number
  }]
}, { collection: 'usecase' });

export default mongoose.model('UseCase', UseCaseSchema);
