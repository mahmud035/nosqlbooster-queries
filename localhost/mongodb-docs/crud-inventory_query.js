// db.getCollection('crud-inventory').insertMany([
//     {
//         item: 'journal',
//         qty: 25,
//         size: { h: 14, w: 21, uom: 'cm' },
//         status: 'A',
//         tags: ['blank', 'red'],
//         dim_cm: [14, 21],
//         instock: [
//             { warehouse: 'A', qty: 5 },
//             { warehouse: 'C', qty: 15 }
//         ]
//     },
//     {
//         item: 'notebook',
//         qty: 50,
//         size: { h: 8.5, w: 11, uom: 'in' },
//         status: 'A',
//         tags: ['red', 'blank'],
//         dim_cm: [14, 21],
//         instock: [{ warehouse: 'C', qty: 5 }]
//     },
//     {
//         item: 'paper',
//         qty: 100,
//         size: { h: 8.5, w: 11, uom: 'in' },
//         status: 'D',
//         tags: ['red', 'blank', 'plain'],
//         dim_cm: [14, 21],
//         instock: [
//             { warehouse: 'A', qty: 60 },
//             { warehouse: 'B', qty: 15 }
//         ]
//     },
//     {
//         item: 'planner',
//         qty: 75,
//         size: { h: 22.85, w: 30, uom: 'cm' },
//         status: 'D',
//         tags: ['blank', 'red'],
//         dim_cm: [22.85, 30],
//         instock: [
//             { warehouse: 'A', qty: 40 },
//             { warehouse: 'B', qty: 5 }
//         ]
//     },
//     {
//         item: 'postcard',
//         qty: 45,
//         size: { h: 10, w: 15.25, uom: 'cm' },
//         status: 'A',
//         tags: ['blue'],
//         dim_cm: [10, 15.25],
//         instock: [
//             { warehouse: 'B', qty: 15 },
//             { warehouse: 'C', qty: 35 }
//         ]
//     }
// ])


// Select All Documents in a Collection
// db.getCollection('crud-inventory').find({})


// Select all documents where the status equals "D"
// db.getCollection('crud-inventory').find({ status: 'D' })


// Select all documents where status equals either "A" or "D":
// db.getCollection('crud-inventory').find({
//     status: { $in: ['A', 'D'] }
// })


// Select all documents where the status equals "A" and `qty` is less than ($lt) 30:
// db.getCollection('crud-inventory').find(
//     { status: 'A', qty: { $lt: 30 } }
// )


// Select all documents where the status equals "A" or `qty` is less than ($lt) 30:
// db.getCollection('crud-inventory').find({
//     $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
// })


// Select all documents where the status equals "A" and either `qty` is less than ($lt) 30 or `item` starts with the character `p`:
// db.getCollection('crud-inventory').find({
//     status: 'A',
//     $or: [
//         { qty: { $lt: 30 } },
//         { item: { regex: '^p' } }
//     ]
// })


// To specify a query condition on fields in an embedded/nested document, use dot notation ("field.nestedField").
// NOTE: When querying using dot notation, the field and nested field must be inside quotation marks. 


// Select all documents where the field `uom` nested in the `size` field equals "in"
// db.getCollection('crud-inventory').find({
//     'size.uom': 'in'
// })


// Another example
// db.getCollection('crud-inventory').find({
//     'size.h': { $lt: 15 }
// })


// Specify AND Condition
// The following query selects all documents where the nested field `h` is less than 15, the nested field `uom` equals "in", and the `status` field equals "D": 
// db.getCollection('crud-inventory').find({
//     'size.h': { $lt: 15 },
//     'size.uom': 'in',
//     status: 'D'
// })


// Match an Embedded/Nested Document
// the following query selects all documents where the field `size` equals the document { h: 14, w: 21, uom: "cm" }:
// db.getCollection('crud-inventory').find({
//     size: { h: 14, w: 21, uom: 'cm' }
// })


// Match an Array
// The following example queries for all documents where the field `tags` value is an array with exactly two elements, "red" and "blank", in the specified order:
// db.getCollection('crud-inventory').find({
//     tags: ['red', 'blank']
// })


// If, instead, you wish to find an array that contains both the elements "red" and "blank", without regard to order or other elements in the array, use the $all operator:
// db.getCollection('crud-inventory').find({
//     tags: { $all: ['red', 'blank'] }
// })


// Query an Array for an Element 
// The following example queries for all documents where tags is an array that contains the string "red" as one of its elements:
// db.getCollection('crud-inventory').find({
//     tags: 'red'
// })


// The following operation queries for all documents where the array `dim_cm` contains at least one element whose value is greater than 25.
// db.getCollection('crud-inventory').find({
//     dim_cm: { $gt: 25 }
// })


// Specify Multiple Conditions for Array Elements
// When specifying compound conditions on array elements, you can specify the query such that either a single array element meets these condition or any combination of array elements meets the conditions.
// Query an Array with Compound Filter Conditions on the Array Elements
// The following example queries for documents where the `dim_cm array` contains elements that in some combination satisfy the query conditions; e.g., one element can satisfy the greater than 15 condition and another element can satisfy the less than 20 condition, or a single element can satisfy both:
// db.getCollection('crud-inventory').find({
//     dim_cm: { $gt: 15, $lt: 20 }
// })


// Query for an Array Element that Meets Multiple Criteria
// Use $elemMatch operator to specify multiple criteria on the elements of an array such that at least one array element satisfies all the specified criteria.
// The following example queries for documents where the `dim_cm` array contains at least one element that is both greater than ($gt) 22 and less than ($lt) 30:
// db.getCollection('crud-inventory').find({
//     dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } }
// })


// Query for an Element by the Array Index Position
//  The following example queries for all documents where the second element in the array `dim_cm` is greater than 25:
// db.getCollection('crud-inventory').find({
//     'dim_cm.1': { $gt: 25 }
// })


// Query an Array by Array Length
// Use the $size operator to query for arrays by number of elements. For example, the following selects documents where the array tags has 3 elements.
// db.getCollection('crud-inventory').find({
//     tags: { $size: 3 }
// })


// Query for a Document Nested in an Array
// The following example selects all documents where an element in the `instock` array matches the specified document:
// db.getCollection('crud-inventory').find({
//     instock: { warehouse: 'A', qty: 5 }
// })


// Order Matters
// Equality matches on the whole embedded/nested document require an exact match of the specified document, including the field order. For example, the following query does not match any documents in the inventory collection:
// db.getCollection('crud-inventory').find({
//     instock: { qty: 5, warehouse: 'A' }
// })


// Specify a Query Condition on a Field Embedded in an Array of Documents
// If you do not know the index position of the document nested in the array, concatenate the name of the array field, with a dot (.) and the name of the field in the nested document.
// The following example selects all documents where the instock array has at least one embedded document that contains the field `qty` whose value is less than or equal to 20:
db.getCollection('crud-inventory').find({
'instock.qty': { $lte: 20 }
})
































