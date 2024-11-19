const mongoose = require('mongoose');
const dbUrl = process.env.DBURL;

main()
.then(res => console.log("Connection Successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
}

module.exports = main



