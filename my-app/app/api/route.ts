import { NextApiRequest, NextApiResponse } from 'next';
import { myDb } from 'external-lib-foo';

/*
type NextApiRequestmyDb = NextApiRequest & {
  db: (usersOrOtherName: string) => void;
};*/

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await req.method;
    res.status(200).json({ result });
    catch {
      res.status(500).json({ error: 'failed to load data' });
    } 
  }
  //req.db('usersOrOtherName'); // we can now use `req.foo` without type errors
  //res.end('ok');
};
export default myDb(handler);