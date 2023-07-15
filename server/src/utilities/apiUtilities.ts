import { Request } from 'express';

import IRequest from '~/types/IRequest';

const extractUserIdFromRequest = (req: IRequest) => {
  return req.user && req.user.user_id;
};

const extractQueryForRequest = (req: Request, query: string) => {
  if (req.query[query]) {
    // @ts-ignore
    return JSON.parse(req.query[query]);
  }
  return [];
};

const extractCookieFromRequest = (req: Request, key: string) => {
  console.log(req.headers.authorization, 'authorization');

  if (req.headers.authorization) {
    return req.headers.authorization as string;
  }
  if (req.headers.cookie) {
    const results = req.headers.cookie.split(';');
    const filtered = results.filter((result: string) => {
      return result.startsWith(`${key}=`);
    });
    if (filtered.length > 0) {
      return filtered[0].split('=')[1];
    }
  }
  return null;
};

export {
  extractUserIdFromRequest,
  extractQueryForRequest,
  extractCookieFromRequest,
};
