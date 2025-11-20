// This query filter returns all documents in the sample_training.grades collection that contain a subdocument in the scores array where type is set to exam. The full document, including the entire scores array, is returned.
db.grades.find({
  'scores.type': 'exam',
});
