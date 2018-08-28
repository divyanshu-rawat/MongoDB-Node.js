

db.scores.count.find({ type : essay , score : {$gt : 90} }}

db.catlog.find({ price : {$gt : 10000}, "reviews.rating" : { $gte : 5} })

db.users.find({ $or : [{score : {$lt : 50}}  , {score : {$gt : 90}}]})

db.users.find({ $or : [{score : {$gt : 90}} ,  {score : {$lt : 50}}]})


db.users.find({ score : {$gt : 50 , $lte : 80}}, {email : true})

db.users.find({profession : {$exists : false}})

db.users.find({name : {$type : 2}})

db.users.find({name : {$regex : "^A"}})

db.users.find( { $and : [ {name : {$gt : "C"}, {name : {$regex : "a"}}} ] })

db.users.find({favourites : { $all : ['Pretzels', "Bears"] }})

db.users.find({favourites : { $in : {['bears','pretzels']} }})

db.users.find({"email.work" : "abc@gmail.com"})

let cursor = db.people.find();


cursor.limit(7)
cursor.sort({name : -1})

cursor.sort({name : -1}).limit(5).skip(2); // analogy order limit in SQL

db.products.count.find({name : "laptop"})
