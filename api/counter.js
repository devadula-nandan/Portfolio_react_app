let count = 0;

const handler = (req, res) => {
  if (req.method === 'GET') {
    ++count;
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({ count });
  }  else {
    res.setHeader('Allow', 'GET');
    res.status(405).end();
  }
};

export default handler;
