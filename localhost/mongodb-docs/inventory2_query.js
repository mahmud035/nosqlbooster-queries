// db.inventory2.insertMany([
//     {
//         "item": "t-shirt",
//         "stock": [
//             {
//                 "size": "small",
//                 "quantity": 8
//             },
//             {
//                 "size": "large",
//                 "quantity": 10
//             },
//         ]
//     },
//     {
//         "item": "sweater",
//         "stock": [
//             {
//                 "size": "small",
//                 "quantity": 4
//             },
//             {
//                 "size": "large",
//                 "quantity": 7
//             },
//         ]
//     },
//     {
//         "item": "vest",
//         "stock": [
//             {
//                 "size": "small",
//                 "quantity": 6
//             },
//             {
//                 "size": "large",
//                 "quantity": 1
//             }
//         ]
//     }
// ])


// Create an Index on an Embedded Field in an Array
// When you create an index on a field inside an array, MongoDB stores that index as a multikey index.


// The following operation creates an ascending multikey index on the stock.quantity field of the inventory collection:
// Because stock contains an array value, MongoDB stores this index as a multikey index.
// db.inventory2.createIndex({ 'stock.quantity': 1 })


// The following query returns documents where at least one element in the stock array has a quantity less than 5:
db.inventory2.find({
    'stock.quantity': { $lt: 5 }
})


// Sort Results
// The index also supports sort operations on the stock.quantity field, such as this query:
// When sorting an array of objects, in a descending sort, MongoDB sorts based on the field with the highest-valued element first.
db.inventory2.find({}).sort({ 'stock.quantity': -1 })

















