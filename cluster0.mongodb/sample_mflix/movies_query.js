// Select all documents where the `year` field matches 1924
// db.movies.find({ year: 1924 }).project({ year: 1, title: 1 })

// Select all documents where the embedded/nested document for the `awards` field contains { wins: 1 }
// db.movies.find({ 'awards.wins': 1 }).project({ awards: 1 })

// The following example finds documents that have a `genres` field that contains the ["Action", "Comedy"] array in the specified order:
// db.movies.find({ genres: ['Action', 'Comedy'] }).project({ genres: 1 })

// To find an array that contains both the elements Action and Comedy, without regard to order or other elements in the array, use the $all operator:
// db.movies.find({ genres: { $all: ['Action', 'Comedy'] } })

// To query if the array field contains at least one element with the specified value, use the filter { <field>: <value> } where <value> is the element value.
// The following example queries for all documents where the genres field contains the string Short as one of its elements:
// db.movies.find({ genres: 'Short' }).project({ genres: 1 })

// The following operation uses the $nin operator to query for all documents where the genres field does not contain Drama.
// db.movies.find({ genres: { $nin: ['Drama'] } }).project({ genres: 1 })

// Query an Array with Compound Filter Conditions on the Array Elements
// The following example queries for documents where the cast array contains elements that in some combination satisfy the query conditions. For example, the following filter uses the $regex and $eq operators to return documents where a single array element ends in Olsen and another element equals Mary-Kate Olsen or a single element that satisfies both conditions:
// This query filter returns movies that include Mary-Kate Olsen in their `cast`, and movies that include both Mary-Kate Olsen and Ashley Olsen in their cast.
// db.movies.find({ cast: { $regex: 'Olsen$', $eq: 'Mary-Kate Olsen' } }).project({ cast: 1 })

// The following example uses the $elemMatch and $ne operators to query for documents where the languages array contains at least one element that is both not null and does not equal English.
// db.movies.find({ languages: { $elemMatch: { $ne: null, $ne: 'English' } } }).project({ languages: 1 })

// The following example uses the $ne operator to query for all documents where the first element in the countries array is not equal to USA:
db.movies.find({ 'countries.0': { $ne: 'USA' } }).project({ countries: 1 });

// Use the $size operator to query for arrays by number of elements. For example, the following selects documents where the array genres has 3 elements.
db.movies.find({ genres: { $size: 3 } }).project({ genres: 1 });

// This query filter returns all documents in the sample_mflix.movies collection where genres equals Action and rated equals either PG or PG-13.
// db.movies.deleteMany(
//     { genres: 'Action', rated: { $in: ['PG', 'PG-13'] } }
// )
