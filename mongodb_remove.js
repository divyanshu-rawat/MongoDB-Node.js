

db.people.remove({"name" : "Alex"})

db.people.remove({ "name" : { $gt : "M"}})

db.scores.remove({"score" : {$lt : 60}})
db.people.drop()

db.runCommand( {getLastError : 1})
//way to check whether  write operation succeded or failed.