// The following operation uses the view's collation:

db.placesView.countDocuments({ category: "cafe" })