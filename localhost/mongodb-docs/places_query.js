// Collation allows you to specify language-specific rules for string comparison, such as rules for letter-case and accent marks 

// db.places.insertMany([
//     { _id: 1, category: "café" },
//     { _id: 2, category: "cafe" },
//     { _id: 3, category: "cafE" }
// ])


// The following operation creates a view, specifying collation at the view level:
db.createView(
    "placesView",
    "places",
    [{ $project: { category: 1 } }],
    { collation: { locale: "fr", strength: 1 } }
)