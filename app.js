const ejs = require ('ejs')
const mongoose = require ('mongoose')
const express = require ('express')
const blogSchema = require('./blogSchema')


const app = express()
mongoose.connect('mongodb+srv://MyFirstBlog:vr7QBBmxmFFKsy6@nodeapps.rxaannf.mongodb.net/blog')
.then(() => {
    app.listen(3000, ()=> {
        console.log("App started on port 3000");

    })
}).catch((err) => {
    console.log(err, "Database connection failed");
})

app.set('view engine', 'ejs')
app.use('/assets', express.static('assets'))

app.get('/', (req, res) =>{
    res.render('index')
})


app.use(express.urlencoded({extended: true}));
app.post('/success', (req, res) => {
    const details = req.body

    run()
    async function run(){
        const blogs = new blogSchema({
            name: details.username,
            title: details.title,
            body: details.body
        })
        await blogs.save()
    } 

    res.render('success')
    console.log(details)

})

app.get('/blogs', async (req, res) => {
    const allPosts = await blogSchema.find()

    res.render('blogs', {posts: allPosts})
})

