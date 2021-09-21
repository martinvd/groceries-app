import { loadJsonFile } from 'load-json-file';
import { NextApiRequest, NextApiResponse } from 'next';
import getConfig from 'next/config';
import path from 'path';
import { getErrorMessage } from '../../../lib/error';
import { filterGroceriesByName } from '../../../lib/groceries';
import { Grocery } from '../../../types';

const { serverRuntimeConfig } = getConfig();

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const {
    query: { name },
  } = request;
  const invalidNameErrorMessage = 'Invalid grocery name.';

  try {
    if (Array.isArray(name)) {
      throw new Error(invalidNameErrorMessage);
    }

    const groceries: Grocery[] = await loadJsonFile(
      path.join(serverRuntimeConfig.PROJECT_ROOT, 'src/data/groceries.json')
    );

    const filteredGroceries = filterGroceriesByName(name, groceries);

    if (filteredGroceries.length > 1) {
      throw new Error(invalidNameErrorMessage);
    }

    response.status(200).json(filteredGroceries[0]);
  } catch (error) {
    response
      .status(500)
      .json({ statusCode: 500, message: getErrorMessage(error) });
  }
};

export default handler;
