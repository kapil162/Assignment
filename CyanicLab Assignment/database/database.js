const mongoose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to database");
    }).catch((error) => {
        console.log("Not connected to database");
    })
}
mongoose.set('strictQuery', false);


// -> keep this commented :
// MONGO_URI=mongodb+srv://zsk_user:QLbSVCacEXN8NGYB@cluster0.dkwl3hj.mongodb.net/zsk

