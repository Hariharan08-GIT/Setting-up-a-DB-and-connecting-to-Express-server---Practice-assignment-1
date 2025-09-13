const dotenv = require('dotenv');
const mongoose =  require('mongoose');
const express = require('express');

dotenv.config();

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'MONGO_URI=mongodb://localhost:27017/studentProjectsDB'
const PORT = process.env.PORT ||3000

mongoose.connect (MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => {
  console.log('connected to MongoDB');
})

.catch((err) =>{
  console.log(`Error connecting to MongoDB: ${err}`);
})

app.listen(PORT, () =>{
console.log(`Server listening on port ${PORT}`);
});


