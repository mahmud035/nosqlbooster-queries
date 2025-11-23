// db.survey2.insertMany([
//     {
//         _id: 1,
//         item: "ABC",
//         ratings: [{ score: 2, by: "mn" }, { score: 9, by: "anon" }]
//     },
//     {
//         _id: 2,
//         item: "XYZ",
//         ratings: [{ score: 5, by: "anon" }, { score: 7, by: "wv" }]
//     }
// ])


// Create a compound index on the following fields:
// - item (non-array)
// - ratings.score (array)
// - ratings.by (array)


// Query the collection
db.survey2.find({
    item: 'XYZ',
    'ratings.score': { $lte: 5 },
    'ratings.by': 'anon'
})






