const { init } = require ('../dbConfig')
//const { ObjectTitle } = require('mongodb')
//const { ObjectDate } = require('mongodb')

class Blog {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.date = data.date
        this.name = data.name
        this.message = data.message
    }

    static findByTitleAndDate (title, date) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let blogData = await db.collection('blogs').find({ title: title, date: date }).toArray();
                let blog = new Blog({...blogData[0], title: blogData[0].title, date: blogData[0].date});
                resolve (blog);
            } catch (err) {
                reject("Oops, we can't find your blog");
            }
        });
    }
}

module.exports = Blog


// static async create(blogData) {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const db = await init();
//             const { title, date, name, message } = blogData;
//             //resolve(console.log(blogData))
//             let blog = await Blog.findOrCreateByTitle(title); //checking if title is already in database
//             console.log(blog)
//             //author should have the id of the newly created or existing
//             let addedBlog = await db.collection('blog').insertOne({title, date, name, message})
//             console.log(addedBlog)
//             let newBlog = new Blog(blogData.ops[0])
//             console.log(newBlog)
//             resolve(newBlog);
//         } catch (err) {
//             reject('Oops, Blog could not be created');
//         }
//     });
// };


// static findByName (name) {
//     return new Promise (async(resolve, reject) => {
//         try{
//             const db = await init();
//             const blogData = await db.collection('blog').find({name: ObjectName(name)}).toArray()
//             console.log(blogData)
//             let blog = new Blog({...blogData[0], name: blogData[0].name});
//             resolve (dog);
//         } catch (err) {
//             console.log(err);
//             reject("Could not find your post")
//         }
//     })
// }

// static findByTitle (title) {
//     return new Promise (async(resolve, reject) => {
//         try{
//             const db = await init();
//             const blogData = await db.collection('blog').find({title: Object(title)}).toArray()
//             let blog = new Blog({...blogData[0], name: blogData[0].name});
//             resolve (dog);
//         } catch (err) {
//             console.log(err);
//             reject("Could not find your post")
//         }
//     })
// }

// static get all(title, date) {
//     return new Promise (async (resolve, reject) => {
//         try {
//             const db = await init()
//             const blogsData = await db.collection('blogs').find({title: title, date: date}).toArray()
//             resolve(console.log(blogsData))
//             //const blogs = blogsData.map(d => new Blog({ ...d, title: d.title, date: d.date}))
//             //resolve(blogs);
//         } catch (err) {
//             console.log(err);
//             reject("Oops, we couldn't find your post")
//         }
//     })
// }
//}