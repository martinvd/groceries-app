import { loadJsonFile } from 'load-json-file';
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import path from 'path';
import { getErrorMessage } from '../../lib/error';

const { serverRuntimeConfig } = getConfig();

const handler = async (_request: NextApiRequest, response: NextApiResponse) => {
  try {
    const groceries = await loadJsonFile(
      path.join(serverRuntimeConfig.PROJECT_ROOT, 'src/data/groceries.json')
    );

    response.status(200).json(groceries);
  } catch (error) {
    response
      .status(500)
      .json({ statusCode: 500, message: getErrorMessage(error) });
  }
};

export default handler;
