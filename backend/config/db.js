const mongoose = require('mongoose');

const configureDB = async () => {
    try{
        const db = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

module.exports = configureDB;