// The following query filter to match documents that either contain a description field with a null value or do not contain the description field:
db.companies.find({ description: null }).project({ description: 1 });

// The following query filter to match only documents that do not contain the description field. Only the document that you inserted earlier should appear:
db.companies.find({ description: { $exists: false } });
