const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/dbtest';

    mongoose.connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      }).then(res=>{
              console.log("DB Connected!")
      }).catch(err => {
        console.log(Error, err.message);
      })