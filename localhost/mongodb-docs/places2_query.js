// db.places2.insertMany([
//     {
//         loc: { type: "Point", coordinates: [-73.97, 40.77] },
//         name: "Central Park",
//         category: "Park"
//     },
//     {
//         loc: { type: "Point", coordinates: [-73.88, 40.78] },
//         name: "La Guardia Airport",
//         category: "Airport"
//     },
//     {
//         loc: { type: "Point", coordinates: [-1.83, 51.18] },
//         name: "Stonehenge",
//         category: "Monument"
//     }
// ])


// The values in the `loc` field are GeoJSON points.


// The following operation creates a 2dsphere index on the location field loc:
// db.places2.createIndex({ loc: '2dsphere' })


// Procedure
// Use $geoWithin to query the collection. The following $geoWithin query specifies a polygon with four vertices (a rectangle) and returns points within that polygon:
// db.places2.find({
//     loc: {
//         $geoWithin: {
//             $geometry: {
//                 type: 'Polygon',
//                 coordinates: [[
//                     [-73.95, 40.80],
//                     [-73.94, 40.79],
//                     [-73.97, 40.76],
//                     [-73.98, 40.76],
//                     [-73.95, 40.80]
//                 ]]
//             }
//         }
//     }
// })


// Query for Locations within a Circle on a Sphere
// To query the collection, use $geoWithin with the $centerSphere operator:
db.places2.find({
    loc: {
        $geoWithin: {
            $centerSphere: [
                [-1.76, 51.16],
                10 / 6378.1
            ]
        }
    }
})

























































