// db.students7.insertMany(
//     [
//         { _id: 1, name: "Shawn", grades: [70, 85] },
//         { _id: 2, item: "Elena", grades: [92, 84] }
//     ]
// )


// Create a multikey index on the grades array:
// db.students7.createIndex({ grades: 1 })


// Query the collection
db.students7.find({
    grades: { $elemMatch: { $gte: 90, $lte: 99 } }
})













