// db.students5.insertMany([
//     {
//         "name": "Alice",
//         "gpa": 3.6,
//         "location": { city: "Sacramento", state: "California" }
//     },
//     {
//         "name": "Bob",
//         "gpa": 3.2,
//         "location": { city: "Albany", state: "New York" }
//     }
// ])


// Create an index on the `gpa` field
// db.students5.createIndex({ gpa: 1 })


// Create an Index on an Embedded/Nested Field
// Create an index on the `location.state` field:
db.students5.createIndex({ 'location.state': 1 })












