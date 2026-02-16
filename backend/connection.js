const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://naflarv32_db_user:neflaabdulla@cluster0.g05b5wr.mongodb.net/kmct?appName=Cluster0")
.then(()=>{
    console.log('Connected !')
})
.catch((err)=>{
    console.log(err)
})