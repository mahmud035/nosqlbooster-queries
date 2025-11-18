// Create a collection `geospatial-places` with the following documents:
// db.getCollection('geospatial-places').insertMany([
//     {
//         name: "Central Park",
//         location: { type: "Point", coordinates: [-73.97, 40.77] },
//         category: "Parks"
//     },
//     {
//         name: "Sara D. Roosevelt Park",
//         location: { type: "Point", coordinates: [-73.9928, 40.7193] },
//         category: "Parks"
//     },
//     {
//         name: "Polo Grounds",
//         location: { type: "Point", coordinates: [-73.9375, 40.8303] },
//         category: "Stadiums"
//     }
// ])


// The following operation creates a 2dsphere index on the location field:
// db.getCollection('geospatial-places').createIndex({ location: '2dsphere' })


// The places collection above has a 2dsphere index. The following query uses the $near operator to return documents that are at least 1000 meters from and at most 5000 meters from the specified GeoJSON point, sorted in order from nearest to farthest:
// db.getCollection('geospatial-places').find(
//     {
//         location:
//         {
//             $near:
//             {
//                 $geometry: { type: 'Point', coordinates: [-73.9667, 40.78] },
//                 $minDistance: 1000,
//                 $maxDistance: 5000
//             }
//         }
//     }
// )


// The following operation uses the $geoNear aggregation operation to return documents that match the query filter { category: "Parks" }, sorted in order of nearest to farthest to the specified GeoJSON point:
// db.getCollection('geospatial-places').aggregate([
//     {
//         $geoNear: {
//             near: { type: "Point", coordinates: [-73.99279, 40.719296] },
//             spherical: true,
//             query: { category: "Parks" },
//             distanceField: "calcDistance",
//         }
//     }
// ])

































