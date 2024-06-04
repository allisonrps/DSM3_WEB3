require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const DB_USER = process.env.DB_USER;
        const DB_PASSWORD = process.env.DB_PASSWORD;
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.js5vzpa.mongodb.net/web3`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log('Conectado ao MongoDB!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
    }
};

module.exports = connectDB;