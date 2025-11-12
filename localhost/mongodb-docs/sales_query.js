// Query the View 
// To find the total amount sold of each product, query the view:

db.sales.aggregate([
    {
        $group:
        {
            _id: "$prodId",
            amountSold: { $sum: { $multiply: ["$price", "$numPurchased"] } }
        }
    }
])