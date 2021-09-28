const db = connect("mongodb://localhost:27017/telegraph")

db.blogs.drop()

db.blog.insertMany([
    {title: "Terrible Tuesday", date: "28-09-2021", name: "culottessplendid", message: "The assignment this morning was really hard"},
    {title: "Wonderful Wednesday", date: "22-03-2020", name: "survivehandful", message: "Today was a good day, I had three pieces of toast"},
    {title: "Thousands on Thursday", date: "08-01-2009", name: "horrifiedroughly", message: "What a day! I won one hundred thousand pounds"},
    {title: "Fragile Friday", date: "16-05-2010", name: "infinitycamel", message: "Drank a little too much last night, oops"}
]) //array of objects