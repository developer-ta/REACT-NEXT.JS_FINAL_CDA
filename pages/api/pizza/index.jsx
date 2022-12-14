import Pizza from '../../../model/Pizza';
import dbMongoose from '../../../util/mongoConn';

dbMongoose();
export default async function handler(req, res) {
  const { method, body } = req;
  //GET order by client
  if (method === 'GET') {
    try {
      const pizzaData = await Pizza.findById('63321056b7f6f96bb0352167');
      res.status(200).json({ name: 'John Doe', pizzaData });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //post order by client
  if (method === 'POST') {
    try {
      const pizzaData = await Pizza.create(body);
      res.status(200).json({ name: 'John Doe', pizzaData });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
