const { init } = require ('../dbConfig')
const { ObjectName } = require('mongodb')

class Blog {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.name = data.name
        this.message = data.message
    }


    static findByName (name) {
        return new Promise (async(resolve, reject) => {
            try{
                const db = await init();
                const blogData = await db.collection('blog').find({name: ObjectName(name)}).toArray()
                console.log(blogData)
                let blog = new Blog({...blogData[0], name: blogData[0].name});
                resolve (dog);
            } catch (err) {
                console.log(err);
                reject("Could not find your post")
            }
        })
    }

    static findByTitle (title) {
        return new Promise (async(resolve, reject) => {
            try{
                const db = await init();
                const blogData = await db.collection('blog').find({title: Object(title)}).toArray()
                let blog = new Blog({...blogData[0], name: blogData[0].name});
                resolve (dog);
            } catch (err) {
                console.log(err);
                reject("Could not find your post")
            }
        })
    }
}

module.exports = Blog