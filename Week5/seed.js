const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB')
  .then(async () => {
    console.log('Connected to MongoDB for seeding!');

    const ProjectSchema = new mongoose.Schema({
      title: String,
      image: String,
      link: String,
      description: String,
    });
    const Project = mongoose.model('Project', ProjectSchema);

    const projects = [
      {
        title: "Kitten 2",
        image: "images/k1.webp",
        link: "About Kitten 2",
        description: "Demo description about kitten 4"
      },
      {
        title: "Kitten 3",
        image: "images/k3.webp",
        link: "About Kitten 3",
        description: "Demo description about kitten 5"
      },
      {
        title: "Kitten 5",
        image: "images/kitten.jpg",
        link: "About Kitten 5",
        description: "Demo description about kitten 6"
      }
    ];

    await Project.insertMany(projects);
    console.log(`${projects.length} projects saved!`);

    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  })
  .catch(err => {
    console.error('Error during seeding:', err);
    mongoose.connection.close();
  });
