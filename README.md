# NoSQLBooster — MongoDB Query Practice

A curated collection of MongoDB query scripts written and run in [NoSQLBooster](https://nosqlbooster.com/) (a MongoDB GUI/IDE). Each `*_query.js` file is a heavily-commented set of queries against one collection — a personal study log and quick reference for MongoDB's query language, indexing, geospatial features, and the aggregation pipeline.

> These are reference scripts, not an application. Open a file in NoSQLBooster (or run it with `mongosh`) and execute the statements one at a time against the matching database. Most lines are commented out on purpose so you can run them selectively.

## Structure

Scripts are organized by **connection → database → collection**:

```
nosqlbooster-queries/
├── cluster0.mongodb/          # MongoDB Atlas cluster — official sample datasets
│   ├── sample_mflix/          # movies_query.js
│   ├── sample_supplies/       # sales_query.js
│   └── sample_training/       # companies_query.js, grades_query.js
└── localhost/                 # local mongod
    └── mongodb-docs/          # queries following the official MongoDB documentation
        ├── crud-inventory, inventory, inventory2, orders, products, sales
        ├── students, students5–7, survey, survey2, leaderboard
        ├── employees, users
        └── places, places2, placesView, geospatial-places, gasStations
```

- **cluster0.mongodb/** — runs against the free [Atlas sample datasets](https://www.mongodb.com/docs/atlas/sample-data/) (`sample_mflix`, `sample_supplies`, `sample_training`).
- **localhost/mongodb-docs/** — collections seeded locally to follow examples from the MongoDB docs.

## Topics covered

- **CRUD** — `insertMany`, `updateMany`, `deleteMany`, and `find` with projection
- **Query operators** — `$elemMatch`, `$all`, `$in` / `$nin`, `$regex`, and array / nested-document queries
- **Indexing** — `createIndex`, compound indexes, and `2dsphere` geospatial indexes
- **Geospatial** — `$geoNear`, `2dsphere`, and point/place lookups
- **Aggregation pipeline** — `$match`, `$group`, `$project`, `$unwind`, `$lookup`
- **Views** — `createView`

## Usage

```bash
git clone https://github.com/mahmud035/nosqlbooster-queries.git
cd nosqlbooster-queries
```

1. Open a `*_query.js` file in NoSQLBooster (or `mongosh`) connected to the matching database.
2. For the `cluster0.mongodb/` scripts, load MongoDB's sample datasets into your Atlas cluster first.
3. For `localhost/mongodb-docs/`, seed the collection using the `insertMany(...)` block near the top of each file, then run the queries below it.
