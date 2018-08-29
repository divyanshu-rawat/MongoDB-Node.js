

db.scores.update({}, {"score" : {$lt : 70 }},{ $inc : {"score": 20 }} , multi : true)

db.users.update({"name" : "Divyanshu"},    {"name" : "Himanshu", "salary" : 5000})
db.users.update({"_id"  : "myrnarackham"}, { $set : {country : "US"}} )
db.users.update({"name" : "Divyanshu"},    {    $inc : {"age" : 45} } )


db.users.update({"name": "Jones"}, {$unset : {"profession" : 1}})

db.arrays.update({$set : {"a.2" : 5 }})

db.array.update( { "_id" : 0} , { a : { $push : 6} } )
db.array.update( { "_id" : 0} , { a : { $pop :  1} } ) // removes rightmost element

db.array.update( { "_id" : 0} , { a : { $pop : -1} } ) // removes leftmost element

db.array.update( { "_id" : 0} , { a : { $pushAll : [6,7] } } )

db.array.update( { "_id" : 0} , { a : { $pull : 7 } } ) // removes value from the array no matter what's it's location is.

db.array.update( { "_id" : 0} , { a : { $pullAll : [8,7] } } ) // removes all occurence.

db.array.update( { "_id" : 0} , { a : { $addToSet :  1} } )

db.people.update( {"name" : "William" }, { $set : { "age" : 40}}, {upsert : true})

db.people.update( {}, { $set : {"title" : "Dr."}}, {multi : true} )