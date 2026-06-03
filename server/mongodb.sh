MONGO_URI=mongodb://127.0.0.1:27017/food-delivery

show dbs

use foodapp

# See Current DB 
db


# Show collections/tables

show collections

# Insert data into collection

db.users.insertOne({
  name: "Chandra",
  email: "chandra@gmail.com"
})

# Show all data from collection

db.users.find()


# Better formatted output:
db.users.find().pretty()

# Find one document
db.users.findOne()

# Update document

db.users.updateOne(
  { name: "Chandra" },
  { $set: { email: "new@gmail.com" } }
)

# Delete document

db.users.deleteOne({ name: "Chandra" })

# Delete collection

db.users.drop()


# Delete database

db.dropDatabase()


# Exit mongosh

exit




