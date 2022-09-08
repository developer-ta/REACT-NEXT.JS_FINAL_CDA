import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGO_URL;

async function dbMongoose() {
  mongoose
    .connect(MONGODB_URL)
    .then(() => {
      console.log('mongodb connect');
    })
    .catch((err) => console.log(err));
}
export default dbMongoose;
