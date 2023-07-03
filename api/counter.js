let count = 0;

const handler = (req, res) => {
  if (req.method === 'GET') { 
    ++ count;
    res.status(200).json({ count });
  }  else {
    res.status(405).end();
  }
};

export default handler;
