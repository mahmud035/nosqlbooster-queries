// db.survey.insertMany(
//     [
//         { _id: 1, item: "ABC", ratings: [2, 9] },
//         { _id: 2, item: "XYZ", ratings: [4, 3] }
//     ]
// )


// Create a compound multikey index on the item and ratings fields:
db.survey.createIndex({ item: 1, ratings: 1 })


// Query the collection
db.survey.find({ item: 'XYZ', ratings: { $gte: 3 } })



