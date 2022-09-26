import mongoose from 'mongoose';

const URI = process.env.MONGO_URL;

export default async function dbMongoose() {
  mongoose
    .connect(URI)
    .then(() => {
      console.log('mongodb connected !!!!!!');
    })
    .catch((err) => console.log(err));
}

