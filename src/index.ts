import { IncomingMessage, ServerResponse } from 'http';

import checkBasicAuth from './checkBasicAuth';
import { User } from './types';

interface Options {
  users?: User[]
}

function init(options: Options = {}) {
  const { users } = options
  if (!users) {
    throw new Error(
      "You must supply an array of user/password combinations in the config."
    )
  }

  return (req: IncomingMessage, res: ServerResponse) => {
    return checkBasicAuth(req, res, users)
  }
}

export default init
