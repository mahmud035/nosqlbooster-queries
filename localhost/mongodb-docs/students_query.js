// Create an example students collection (if the collection does not currently exist, insert operations will create the collection):
// db.students.insertMany([
//     { _id: 1, test1: 95, test2: 92, test3: 90, modified: new Date("01/05/2020") },
//     { _id: 2, test1: 98, test2: 100, test3: 102, modified: new Date("01/05/2020") },
//     { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") }
// ])


// To verify, query the collection:
// db.students.find({})


// The following db.collection.updateOne() operation uses an aggregation pipeline to update the document with _id: 3:
// db.students.updateOne(
//     { _id: 3 },
//     {
//         $set: { 'test3': 98, modified: '$$NOW' }
//     }
// )


// To verify the update, you can query the collection:
// db.students.find({}).pretty()


// updateMany with $replaceRoot and $set
// Create an example students2 collection (if the collection does not currently exist, insert operations will create the collection):
// db.students2.insertMany([
//     { "_id": 1, quiz1: 8, test2: 100, quiz2: 9, modified: new Date("01/05/2020") },
//     { "_id": 2, quiz2: 5, test1: 80, test2: 89, modified: new Date("01/05/2020") },
// ])


// To verify, query the collection:
// db.students2.find({})


// The following db.collection.updateMany() operation uses an aggregation pipeline to standardize the fields for the documents (i.e. documents in the collection should have the same fields) and update the modified field:
// db.students2.updateMany(
//     {},
//     [
//         {
//             $replaceRoot: {
//                 newRoot: {
//                     $mergeObjects: [{ quiz1: 0, quiz2: 0, test1: 0, test2: 0 }, '$$ROOT']
//                 }
//             }
//         },
//         { $set: { modified: '$$NOW' } }
//     ]
// )


// To verify the update, you can query the collection:
// db.students2.find({})


// updateMany with $set
// Create an example students3 collection (if the collection does not currently exist, insert operations will create the collection):
// db.students3.insertMany([
//     { "_id": 1, "tests": [95, 92, 90], "modified": ISODate("2019-01-01T00:00:00Z") },
//     { "_id": 2, "tests": [94, 88, 90], "modified": ISODate("2019-01-01T00:00:00Z") },
//     { "_id": 3, "tests": [70, 75, 82], "modified": ISODate("2019-01-01T00:00:00Z") }
// ]);


// To verify, query the collection:
// db.students3.find({})


// The following db.collection.updateMany() operation uses an aggregation pipeline to update the documents with the calculated grade average and letter grade.
// db.students3.updateMany(
//     {},
//     [
//         { $set: { average: { $trunc: [{ $avg: "$tests" }, 0] }, modified: '$$NOW' } },
//         {
//             $set: {
//                 grade: {
//                     $switch: {
//                         branches: [
//                             { case: { $gte: ["$average", 90] }, then: 'A' },
//                             { case: { $gte: ["$average", 80] }, then: 'B' },
//                             { case: { $gte: ["$average", 70] }, then: 'C' },
//                             { case: { $gte: ["$average", 60] }, then: 'D' }
//                         ],
//                         default: 'F'
//                     }
//                 }
//             }
//         }
//     ]
// )


// To verify the update, you can query the collection:
// db.students3.find({})


// updateOne with $set
// Create an example students4 collection (if the collection does not currently exist, insert operations will create the collection):
// db.students4.insertMany([
//     { "_id": 1, "quizzes": [4, 6, 7] },
//     { "_id": 2, "quizzes": [5] },
//     { "_id": 3, "quizzes": [10, 10, 10] }
// ])


// To verify, query the collection:
// db.students4.find({})


// The following db.collection.updateOne() operation uses an aggregation pipeline to add quiz scores to the document with _id: 2:
// db.students4.updateOne(
//     { _id: 2 },
//     [
//         { $set: { quizzes: { $concatArrays: ["$quizzes", [8, 6]] } } }
//     ]
// )


// To verify the update, query the collection:
// db.students4.find({})


// updateMany with $addFields
// Create an example temperatures collection that contains temperatures in Celsius (if the collection does not currently exist, insert operations will create the collection):
// db.temperatures.insertMany([
//     { "_id": 1, "date": ISODate("2019-06-23"), "tempsC": [4, 12, 17] },
//     { "_id": 2, "date": ISODate("2019-07-07"), "tempsC": [14, 24, 11] },
//     { "_id": 3, "date": ISODate("2019-10-30"), "tempsC": [18, 6, 8] }
// ])


// To verify, query the collection:
// db.temperatures.find({})


// The following db.collection.updateMany() operation uses an aggregation pipeline to update the documents with the corresponding temperatures in Fahrenheit:
// db.temperatures.updateMany(
//     {},
//     [
//         {
//             $addFields: {
//                 'tempsF': {
//                     $map: {
//                         input: "$tempsC",
//                         as: "celsius",
//                         in: { $add: [{ $multiply: ["$$celsius", 9 / 5] }, 32] }
//                     }
//                 }
//             }
//         }
//     ]
// )


// To verify the update, you can query the collection:
// db.temperatures.find({})


// Update with let Variables
// To define variables that you can access elsewhere in the command, use the `let` option.
// NOTE: To filter results using a variable, you must access the variable within the $expr operator.
// Create a collection `cakeFlavors`:
// db.cakeFlavors.insertMany([
//     { _id: 1, flavor: "chocolate" },
//     { _id: 2, flavor: "strawberry" },
//     { _id: 3, flavor: "cherry" }
// ])


// The following updateOne command uses variables set with the let option:
// * The targetFlavor variable is set to cherry. This variable is used in the $eq expression to specify the match filter.
// * The newFlavor variable is set to orange. This variable is used in the $set operator to specify the updated flavor value for the matched document.
// db.cakeFlavors.updateOne(
//     {
//         $expr: { $eq: ["$flavor", "$$targetFlavor"] }
//     },
//     [
//         { $set: { flavor: '$$newFlavor' } }
//     ],
//     {
//         let: { targetFlavor: 'cherry', newFlavor: 'orange' }
//     }
// )



































