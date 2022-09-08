import pizza from '../../../model/pizza';
import dbMongoose from '../../../util/mongoConn';

dbMongoose();
export default async function handler(req, res) {
  const { method, body } = req;
  //GET order by client
  if (method === 'GET') {
    try {
      res.status(200).json({ name: 'John Doe', method });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //post order by client
  if (method === 'POST') {
    try {
      const pizzaData = await pizza.create(body);
      res.status(200).json({ name: 'John Doe', pizzaData });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
