// db.gasStations.insertMany([
//     {
//         loc: { type: "Point", coordinates: [-106.31, 35.65] },
//         state: "New Mexico",
//         country: "United States",
//         name: "Horizons Gas Station"
//     },
//     {
//         loc: { type: "Point", coordinates: [-122.62, 40.75] },
//         state: "California",
//         country: "United States",
//         name: "Car and Truck Rest Area"
//     },
//     {
//         loc: { type: "Point", coordinates: [-72.71, 44.15] },
//         state: "Vermont",
//         country: "United States",
//         name: "Ready Gas and Snacks"
//     }
// ])


// The following $geoIntersects query specifies a LineString containing four points and returns documents that intersect with the line:
db.gasStations.find({
    loc: {
        $geoIntersects: {
            $geometry: {
                type: 'LineString',
                coordinates: [
                    [-105.82, 33.87],
                    [-106.01, 34.09],
                    [-106.31, 35.65],
                    [-107.39, 35.98]
                ]
            }
        }
    }
})








