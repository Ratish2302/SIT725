var express = require("express")
var app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
useNewUrlParser: true,
useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
title: String,
image: String,
link: String,
description: String,
});
const Project = mongoose.model('Project', ProjectSchema);


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cardList = [
{
title: "Kitten 2",
image: "images/k3.webp",
link: "About Kitten 2",
desciption: "Demo desciption about kitten 2"
},
{
title: "Kitten 3",
image: "images/k1.webp",
link: "About Kitten 3",
desciption: "Demo desciption about kitten 3"
}
]
app.get('/api/projects', async (req, res) => {
const projects = await Project.find({});
res.json({ statusCode: 200, data: projects, message: "Success" });
});

var port = process.env.port || 3000;
app.listen(port,()=>{
console.log("App listening to: "+port)
})

