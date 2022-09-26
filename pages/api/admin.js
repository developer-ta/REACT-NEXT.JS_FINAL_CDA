/* -----------------------------import section ----------------------------*/
/* -----------------------------import section ----------------------------*/
/* -----------------------------server side rendering DATA----------------------------*/
/* -----------------------------import section ----------------------------*/
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
	const { method } = req;
	if (method === 'GET') {
	  res.status(200).json({ name: 'John Doe', a: method });
	}
  
	// if (method === 'get') {
	//   res.status(200).json({ name: 'John Doe' });
	// }
	//if (method==='post')
  }
  