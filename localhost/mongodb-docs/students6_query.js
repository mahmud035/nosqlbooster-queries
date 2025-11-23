// db.students6.insertMany([
//     {
//         "name": "Andre Robinson",
//         "test_scores": [88, 97]
//     },
//     {
//         "name": "Wei Zhang",
//         "test_scores": [62, 73]
//     },
//     {
//         "name": "Jacob Meyer",
//         "test_scores": [92, 89]
//     }
// ])


// Create an Index on an Array Field
// The following operation creates an ascending multikey index on the test_scores field of the students collection:
// Because test_scores contains an array value, MongoDB stores this index as a multikey index.
db.students6.createIndex({ test_scores: 1 })


// The following query returns documents where at least one element in the test_scores array is greater than 90:
db.students6.find({
    test_scores: { $elemMatch: { $gt: 90 } }
})


















