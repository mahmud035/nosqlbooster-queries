// db.products.insertMany([
//     {
//         "product_name": "Spy Coat",
//         "attributes": {
//             "material": ["Tweed", "Wool", "Leather"],
//             "size": {
//                 "length": 72,
//                 "units": "inches"
//             }
//         }
//     },
//     {
//         "product_name": "Spy Pen",
//         "attributes": {
//             "colors": ["Blue", "Black"],
//             "secret_feature": {
//                 "name": "laser",
//                 "power": "1000",
//                 "units": "watts",
//             }
//         }
//     }
// ])


// Create a Wildcard Index on a Single Field
// The following operation creates a wildcard index on the attributes field:
// db.products.createIndex({ 'attributes.$**': 1 })


// Query:
// db.products.find({
//     'attributes.size.length': { $gt: 60 }
// })


// Query:
// db.products.find({
//     'attributes.material': 'Leather'
// })


// Query:
db.products.find(
    { 'attributes.secret_feature.name': 'laser' },
    { '_id': 0, 'product_name': 1, 'attributes.colors': 1 }
)

























