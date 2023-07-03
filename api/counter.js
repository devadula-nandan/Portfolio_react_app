const fs = require('fs');

const countFilePath = 'count.txt';

const incrementCount = () => {
  let count = 0;
  if (fs.existsSync(countFilePath)) {
    const storedCount = fs.readFileSync(countFilePath, 'utf-8');
    count = parseInt(storedCount, 10);
  }
  count++;
  fs.writeFileSync(countFilePath, count.toString());
  return count;
};

const ensureCountFileExists = () => {
  if (!fs.existsSync(countFilePath)) {
    fs.writeFileSync(countFilePath, '0');
  }
};

ensureCountFileExists();

const handler = (req, res) => {
  if (req.method === 'GET') {
    const count = incrementCount();
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).json({ count });
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end();
  }
};

export default handler;
