// db.users.insertMany([
//     { _id: 0, type: "admin", email: "admin@example.com", name: "Admin User" },
//     { _id: 1, type: "user", email: "user1@example.com", name: "Test User 1" },
//     { _id: 2, type: "user", email: "user2@example.com", name: "Test User 2" }
// ])


// Access Documents in a Cursor with toArray()
// In mongosh, use the toArray() method to iterate the cursor and return the documents in an array.
// let myCursor = db.users.find({ type: 'user' }).toArray()
// console.log(myCursor)

// Output:
// [
// 	{
// 		"_id" : 1,
// 		"type" : "user",
// 		"email" : "user1@example.com",
// 		"name" : "Test User 1"
// 	},
// 	{
// 		"_id" : 2,
// 		"type" : "user",
// 		"email" : "user2@example.com",
// 		"name" : "Test User 2"
// 	}
// ]


// Indexes
// To see what indexes exist on your collection, including indexes that are currently being built, run the db.collection.getIndexes() method:
db.users.getIndexes()

// Create an Index
// This example creates a single key ascending index on the name field:
db.users.createIndex({ name: 1 })
db.users.getIndexes()








































