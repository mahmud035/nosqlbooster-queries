// This query filter returns all documents in the sample_supplies.sales collection where `saleDate` is on or between January 1 and 2, 2016 UTC time. 
db.sales.find({
    saleDate:
    {
        $gte: { $date: "2016-01-01T00:00-00:00" },
        $lte: { $date: "2016-01-02T00:00-00:00" }
    }
})
