require('dotenv').config();

const mongoose = require('mongoose');
const dbUrl = process.env.DBURL;

main()
.then(res => console.log("Connection Successful"))
.catch(err => console.log(err));

async function main() {
  const mongoUri = process.env.MONGO_URI;
  await mongoose.connect(mongoUri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
}

module.exports = main



