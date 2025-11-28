// db.leaderboard.insertMany([
//     {
//         "score": 50,
//         "username": "Alex Martin",
//         "date": ISODate("2022-03-01T00:00:00Z")
//     },
//     {
//         "score": 55,
//         "username": "Laura Garcia",
//         "date": ISODate("2022-03-02T00:00:00Z")
//     },
//     {
//         "score": 60,
//         "username": "Alex Martin",
//         "date": ISODate("2022-03-03T00:00:00Z")
//     },
//     {
//         "score": 60,
//         "username": "Riya Patel",
//         "date": ISODate("2022-03-04T00:00:00Z")
//     },
//     {
//         "score": 50,
//         "username": "Laura Garcia",
//         "date": ISODate("2022-03-05T00:00:00Z")
//     }
// ])

// This query returns leaderboard results:
// The results are sorted first by `score` in descending order, then by `username` in ascending order (alphabetically).
db.leaderboard.find({}).sort({ score: -1, username: 1 });

// Supporting Index for the Leaderboard
// The following index improves performance for the leaderboard results because the sort order of the index matches the sort order used in the query:
// This compound index stores:
// * score values in descending order.
// * username values in ascending order (alphabetically).
// db.leaderboard.createIndex({ score: -1, username: 1 })

// Reverse Results
// The following query returns the leaderboard in reverse order, where results are sorted first by ascending score values and then by descending username values (reverse alphabetically):
db.leaderboard.find({}).sort({ score: 1, username: -1 });
