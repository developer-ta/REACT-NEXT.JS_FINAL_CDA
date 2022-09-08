import dbMongoose from '../../../../util/mongoConn';

dbMongoose();

export default async function handler(req, res) {
  const { method, query, body } = req;
  console.log('req: ', req.query.id);

  //GET

  if (method === 'GET') {
    try {
      //   const pizzaData = await pizzaModel.findById(query.id);
      res.status(200).json({ name: 'John Doe', method, id: query.id });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  //if (method==='post')

  //   if (method === 'POST') {
  //     try {
  //       const pizzaData = await pizzaModel.create(body);
  //       res.status(200).json({ name: 'John Doe', method, id: query.id });
  //     } catch (error) {
  //       res.status(500).json({ error });
  //     }
  //   }
}
