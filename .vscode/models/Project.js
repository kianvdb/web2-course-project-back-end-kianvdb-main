const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  short_description: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  cost: { type: String, required: true },
  difficulty: { type: String, required: true },
  category: { type: String, required: true },
});

// // Modify the toJSON method to include all fields
// projectSchema.set('toJSON', {
//   transform: (doc, ret) => {
//     ret.id = ret._id;
//     delete ret._id;
//     delete ret.__v;
//   },
// });

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
